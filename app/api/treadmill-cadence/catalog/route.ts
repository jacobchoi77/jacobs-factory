import { NextResponse } from "next/server";

const OWNER = "jacobchoi77";
const REPO = "jacobs-factory";
const PATH = "public/treadmill-cadence/catalog.json";

function tokenFrom(req: Request): string | null {
  const env = process.env.CATALOG_GITHUB_TOKEN;
  if (env) return env;
  const auth = req.headers.get("authorization") || "";
  const match = auth.match(/^Bearer\s+(.+)$/i);
  return match?.[1]?.trim() || null;
}

export async function POST(req: Request) {
  const token = tokenFrom(req);
  if (!token) {
    return NextResponse.json({ error: "token required" }, { status: 401 });
  }
  let catalog: unknown;
  try {
    catalog = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid json" }, { status: 400 });
  }
  if (!catalog || typeof catalog !== "object" || !Array.isArray((catalog as { tracks?: unknown }).tracks)) {
    return NextResponse.json({ error: "catalog.tracks missing" }, { status: 400 });
  }
  const text = `${JSON.stringify(catalog, null, 2)}\n`;
  const headers = {
    Authorization: `Bearer ${token}`,
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    "User-Agent": "play-cadence-editor",
  };
  const getRes = await fetch(`https://api.github.com/repos/${OWNER}/${REPO}/contents/${PATH}`, { headers });
  if (getRes.status === 401 || getRes.status === 403) {
    return NextResponse.json({ error: "github unauthorized" }, { status: 401 });
  }
  if (!getRes.ok) {
    return NextResponse.json({ error: `github read ${getRes.status}` }, { status: 502 });
  }
  const current = (await getRes.json()) as { sha?: string };
  const putRes = await fetch(`https://api.github.com/repos/${OWNER}/${REPO}/contents/${PATH}`, {
    method: "PUT",
    headers: { ...headers, "Content-Type": "application/json" },
    body: JSON.stringify({
      message: "트랙 카탈로그를 에디터에서 올린다",
      content: Buffer.from(text, "utf8").toString("base64"),
      sha: current.sha,
    }),
  });
  if (!putRes.ok) {
    return NextResponse.json({ error: `github write ${putRes.status}` }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
