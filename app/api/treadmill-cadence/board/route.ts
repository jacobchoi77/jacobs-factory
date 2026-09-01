import { NextResponse } from "next/server";

const TOP_N = 20;
const MAX_SCORE = 1_000_000;
const PLAYER_RE = /^([0-9a-fA-F-]{8,64}|[0-9]{10,32})$/;
const TRACK_RE = /^[a-z0-9-]{3,64}$/;

type BoardRow = {
  rank: number;
  name: string;
  score: number;
  isMe: boolean;
  playerId?: string;
};

function redis() {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return null;
  return { url: url.replace(/\/$/, ""), token };
}

async function redisCmd(cmd: unknown[]): Promise<unknown> {
  const cfg = redis();
  if (!cfg) throw new Error("redis unconfigured");
  const res = await fetch(`${cfg.url}/pipeline`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${cfg.token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify([cmd]),
  });
  if (!res.ok) throw new Error(`redis ${res.status}`);
  const payload = (await res.json()) as { result?: unknown }[];
  return payload[0]?.result;
}

async function redisPipeline(cmds: unknown[][]): Promise<unknown[]> {
  const cfg = redis();
  if (!cfg) throw new Error("redis unconfigured");
  const res = await fetch(`${cfg.url}/pipeline`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${cfg.token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cmds),
  });
  if (!res.ok) throw new Error(`redis ${res.status}`);
  const payload = (await res.json()) as { result?: unknown }[];
  return payload.map((row) => row.result);
}

function sanitizeName(raw: unknown, playerId: string): string {
  const text = typeof raw === "string" ? raw.trim().replace(/\s+/g, " ") : "";
  if (text.length < 2) {
    const suffix = playerId.replace(/[^0-9a-fA-F]/g, "").slice(-4).toUpperCase();
    return suffix ? `Runner-${suffix}` : "Runner";
  }
  return text.slice(0, 16);
}

function cors(res: NextResponse) {
  res.headers.set("Access-Control-Allow-Origin", "*");
  res.headers.set("Access-Control-Allow-Methods", "GET,POST,DELETE,OPTIONS");
  res.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
  return res;
}

function bearer(req: Request): string {
  const auth = req.headers.get("authorization") || "";
  const match = auth.match(/^Bearer\s+(.+)$/i);
  return match?.[1]?.trim() || "";
}

async function requireAdmin(req: Request): Promise<NextResponse | null> {
  const token = bearer(req);
  if (!token) {
    return NextResponse.json({ error: "token required" }, { status: 401 });
  }
  const res = await fetch("https://api.github.com/repos/jacobchoi77/jacobs-factory", {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
      "User-Agent": "play-cadence-board-admin",
    },
  });
  if (!res.ok) {
    return NextResponse.json({ error: "github unauthorized" }, { status: 401 });
  }
  return null;
}

export async function OPTIONS() {
  return cors(new NextResponse(null, { status: 204 }));
}

export async function GET(req: Request) {
  const url = new URL(req.url);
  const trackId = url.searchParams.get("track") || "";
  const playerId = url.searchParams.get("player") || "";
  const admin = url.searchParams.get("admin") === "1";
  if (!TRACK_RE.test(trackId) || trackId.startsWith("user-")) {
    return cors(NextResponse.json({ error: "bad track" }, { status: 400 }));
  }
  if (!redis()) {
    return cors(NextResponse.json({ error: "board offline" }, { status: 503 }));
  }
  if (admin) {
    const denied = await requireAdmin(req);
    if (denied) return cors(denied);
  }
  try {
    return cors(
      NextResponse.json(
        admin ? await readAdminBoard(trackId) : await readBoard(trackId, playerId),
      ),
    );
  } catch {
    return cors(NextResponse.json({ error: "board offline" }, { status: 503 }));
  }
}

export async function DELETE(req: Request) {
  if (!redis()) {
    return cors(NextResponse.json({ error: "board offline" }, { status: 503 }));
  }
  const denied = await requireAdmin(req);
  if (denied) return cors(denied);
  let body: { trackId?: unknown; playerId?: unknown };
  try {
    body = await req.json();
  } catch {
    return cors(NextResponse.json({ error: "invalid json" }, { status: 400 }));
  }
  const trackId = typeof body.trackId === "string" ? body.trackId : "";
  const playerId = typeof body.playerId === "string" ? body.playerId : "";
  if (!TRACK_RE.test(trackId) || trackId.startsWith("user-")) {
    return cors(NextResponse.json({ error: "bad track" }, { status: 400 }));
  }
  try {
    if (playerId) {
      if (!PLAYER_RE.test(playerId)) {
        return cors(NextResponse.json({ error: "bad player" }, { status: 400 }));
      }
      await redisCmd(["ZREM", keyFor(trackId), playerId]);
    } else {
      await redisCmd(["DEL", keyFor(trackId)]);
    }
    return cors(NextResponse.json(await readAdminBoard(trackId)));
  } catch {
    return cors(NextResponse.json({ error: "board offline" }, { status: 503 }));
  }
}

async function googleAccount(
  idToken: string,
): Promise<{ sub: string; name: string } | null> {
  const aud = process.env.GOOGLE_WEB_CLIENT_ID || "";
  if (!aud || !idToken) return null;
  const res = await fetch(
    `https://oauth2.googleapis.com/tokeninfo?id_token=${encodeURIComponent(idToken)}`,
  );
  if (!res.ok) return null;
  const body = (await res.json()) as {
    aud?: string;
    sub?: string;
    name?: string;
    email_verified?: string | boolean;
  };
  if (body.aud !== aud) return null;
  if (body.email_verified === "false" || body.email_verified === false) return null;
  if (!body.sub || !/^[0-9]{10,32}$/.test(body.sub)) return null;
  return { sub: body.sub, name: typeof body.name === "string" ? body.name : "" };
}

export async function POST(req: Request) {
  if (!redis()) {
    return cors(NextResponse.json({ error: "board offline" }, { status: 503 }));
  }
  if (!process.env.GOOGLE_WEB_CLIENT_ID) {
    return cors(NextResponse.json({ error: "sign-in offline" }, { status: 503 }));
  }
  let body: { trackId?: unknown; score?: unknown; idToken?: unknown };
  try {
    body = await req.json();
  } catch {
    return cors(NextResponse.json({ error: "invalid json" }, { status: 400 }));
  }
  const trackId = typeof body.trackId === "string" ? body.trackId : "";
  const idToken = typeof body.idToken === "string" ? body.idToken : "";
  const score = typeof body.score === "number" ? Math.floor(body.score) : NaN;
  if (!TRACK_RE.test(trackId) || trackId.startsWith("user-")) {
    return cors(NextResponse.json({ error: "bad track" }, { status: 400 }));
  }
  const account = await googleAccount(idToken);
  if (!account) {
    return cors(NextResponse.json({ error: "bad sign-in" }, { status: 401 }));
  }
  const playerId = account.sub;
  if (!Number.isFinite(score) || score < 1 || score > MAX_SCORE) {
    return cors(NextResponse.json({ error: "bad score" }, { status: 400 }));
  }
  const name = sanitizeName(account.name, playerId);
  try {
    const previous = Number(await redisCmd(["ZSCORE", keyFor(trackId), playerId]));
    if (!Number.isFinite(previous) || score > previous) {
      await redisPipeline([
        ["ZADD", keyFor(trackId), score, playerId],
        ["HSET", `player:${playerId}`, "name", name],
      ]);
    } else {
      await redisCmd(["HSET", `player:${playerId}`, "name", name]);
    }
    return cors(NextResponse.json(await readBoard(trackId, playerId)));
  } catch {
    return cors(NextResponse.json({ error: "board offline" }, { status: 503 }));
  }
}

function keyFor(trackId: string) {
  return `board:${trackId}`;
}

async function boardPairs(trackId: string, all: boolean): Promise<{ id: string; score: number }[]> {
  const stop = all ? -1 : TOP_N - 1;
  const raw = (await redisCmd(["ZREVRANGE", keyFor(trackId), 0, stop, "WITHSCORES"])) as
    | string[]
    | null;
  const pairs: { id: string; score: number }[] = [];
  const list = raw || [];
  for (let i = 0; i < list.length; i += 2) {
    pairs.push({ id: list[i], score: Number(list[i + 1]) });
  }
  return pairs;
}

async function namesFor(pairs: { id: string; score: number }[]): Promise<(string | null)[]> {
  if (!pairs.length) return [];
  return (await redisPipeline(pairs.map((row) => ["HGET", `player:${row.id}`, "name"]))) as (
    | string
    | null
  )[];
}

async function readAdminBoard(trackId: string) {
  const pairs = await boardPairs(trackId, true);
  const names = await namesFor(pairs);
  return {
    trackId,
    rows: pairs.map((row, index) => ({
      rank: index + 1,
      name: names[index] || sanitizeName("", row.id),
      score: row.score,
      playerId: row.id,
    })),
  };
}

async function readBoard(trackId: string, playerId: string) {
  const pairs = await boardPairs(trackId, false);
  const names = await namesFor(pairs);
  const rows: BoardRow[] = pairs.map((row, index) => ({
    rank: index + 1,
    name: names[index] || sanitizeName("", row.id),
    score: row.score,
    isMe: playerId !== "" && row.id === playerId,
  }));
  let myRank: number | null = rows.find((row) => row.isMe)?.rank ?? null;
  if (myRank == null && playerId && PLAYER_RE.test(playerId)) {
    const rank = Number(await redisCmd(["ZREVRANK", keyFor(trackId), playerId]));
    myRank = Number.isFinite(rank) ? rank + 1 : null;
  }
  return { trackId, myRank, rows };
}
