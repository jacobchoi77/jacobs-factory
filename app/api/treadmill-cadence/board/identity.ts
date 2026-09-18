/**
 * Shared identity helpers for the world-board POST.
 *
 * Android still sends `{ trackId, score, idToken, nickname }` with a Google
 * token and no `provider`. iOS sends the same keys plus `provider: "apple"`
 * and an Apple identity token. Provider is inferred from the JWT `iss` when
 * omitted, so a forgotten field does not 401 a valid Apple token.
 *
 * Display name: Google tokens usually carry `name`. Apple hides email and
 * only sends a name on the *first* Sign in with Apple. The client therefore
 * persists that first name and posts it as `nickname`. When both are empty
 * the board falls back to `Runner-XXXX` (last 4 of `sub`) — same as today.
 * A fallback never overwrites a name already stored in Redis.
 */

export const APPLE_ISS = "https://appleid.apple.com";
export const APPLE_JWKS_URL = "https://appleid.apple.com/auth/keys";
export const GOOGLE_ISS = "https://accounts.google.com";

/** Google numeric `sub`, hex/uuid leftovers, or Apple team-scoped user id. */
export const PLAYER_RE = /^[0-9A-Za-z._-]{8,128}$/;

export type Account = { sub: string; name: string; provider: "google" | "apple" };

export type Jwk = {
  kty?: string;
  kid?: string;
  use?: string;
  alg?: string;
  n?: string;
  e?: string;
};

export type AppleVerifyOpts = {
  audiences: string[];
  nowSec?: number;
  clockSkewSec?: number;
  jwks?: { keys: Jwk[] };
  fetchJwks?: () => Promise<{ keys: Jwk[] }>;
};

const JWKS_TTL_MS = 60 * 60_000;
let jwksCache: { at: number; keys: Jwk[] } | null = null;

/** Native Play Cadence identity-token `aud`. Not a secret. */
export const DEFAULT_APPLE_CLIENT_ID = "com.jacobsfactory.playcadence";

export function appleAudiencesFromEnv(env: NodeJS.ProcessEnv = process.env): string[] {
  const client = (env.APPLE_CLIENT_ID || "").trim() || DEFAULT_APPLE_CLIENT_ID;
  const ids = [client, env.APPLE_SERVICES_ID]
    .flatMap((raw) => (raw || "").split(","))
    .map((s) => s.trim())
    .filter(Boolean);
  return [...new Set(ids)];
}

export function sanitizeName(raw: unknown, playerId: string): string {
  const text = typeof raw === "string" ? raw.trim().replace(/\s+/g, " ") : "";
  if (text.length < 2) {
    const suffix = playerId.replace(/[^0-9a-zA-Z]/g, "").slice(-4).toUpperCase();
    return suffix ? `Runner-${suffix}` : "Runner";
  }
  return text.slice(0, 16);
}

export function isRealName(raw: unknown): boolean {
  return typeof raw === "string" && raw.trim().replace(/\s+/g, " ").length >= 2;
}

export function decodeJwtJson(part: string): Record<string, unknown> | null {
  try {
    const json = new TextDecoder().decode(b64urlToBytes(part));
    const value = JSON.parse(json) as unknown;
    return value && typeof value === "object" ? (value as Record<string, unknown>) : null;
  } catch {
    return null;
  }
}

export function peekJwt(idToken: string): { header: Record<string, unknown>; payload: Record<string, unknown> } | null {
  const parts = idToken.split(".");
  if (parts.length < 2 || !parts[0] || !parts[1]) return null;
  const header = decodeJwtJson(parts[0]);
  const payload = decodeJwtJson(parts[1]);
  if (!header || !payload) return null;
  return { header, payload };
}

export function inferProvider(
  explicit: unknown,
  idToken: string,
): "google" | "apple" | null {
  if (explicit === "apple" || explicit === "google") return explicit;
  const iss = peekJwt(idToken)?.payload.iss;
  if (iss === APPLE_ISS) return "apple";
  if (typeof idToken === "string" && idToken.length > 0) return "google";
  return null;
}

export async function googleAccount(
  idToken: string,
  aud: string,
): Promise<Account | null> {
  if (!aud || !idToken) return null;
  const res = await fetch(
    `https://oauth2.googleapis.com/tokeninfo?id_token=${encodeURIClient(idToken)}`,
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
  return {
    sub: body.sub,
    name: typeof body.name === "string" ? body.name : "",
    provider: "google",
  };
}

export async function appleAccount(
  idToken: string,
  opts: AppleVerifyOpts,
): Promise<Account | null> {
  if (!idToken || !opts.audiences.length) return null;
  const peeked = peekJwt(idToken);
  if (!peeked) return null;
  const { header, payload } = peeked;
  if (header.alg !== "RS256") return null;
  const kid = typeof header.kid === "string" ? header.kid : "";
  if (!kid) return null;

  const keys = opts.jwks?.keys ?? (await loadAppleJwks(opts.fetchJwks));
  const jwk = keys.find((key) => key.kid === kid && key.kty === "RSA");
  if (!jwk?.n || !jwk?.e) return null;
  const ok = await verifyRs256(idToken, jwk);
  if (!ok) return null;

  if (payload.iss !== APPLE_ISS) return null;
  if (!audienceMatches(payload.aud, opts.audiences)) return null;
  const now = opts.nowSec ?? Math.floor(Date.now() / 1000);
  const skew = opts.clockSkewSec ?? 60;
  const exp = typeof payload.exp === "number" ? payload.exp : NaN;
  if (!Number.isFinite(exp) || exp + skew <= now) return null;
  const sub = typeof payload.sub === "string" ? payload.sub : "";
  if (!PLAYER_RE.test(sub)) return null;
  const name = typeof payload.name === "string" ? payload.name : "";
  return { sub, name, provider: "apple" };
}

export async function verifySubmitAccount(input: {
  idToken: string;
  provider?: unknown;
  googleAud: string;
  appleAudiences: string[];
}): Promise<Account | null> {
  const provider = inferProvider(input.provider, input.idToken);
  if (provider === "apple") {
    return appleAccount(input.idToken, { audiences: input.appleAudiences });
  }
  if (provider === "google") {
    return googleAccount(input.idToken, input.googleAud);
  }
  return null;
}

function encodeURIClient(idToken: string): string {
  return encodeURIComponent(idToken);
}

function audienceMatches(aud: unknown, allowed: string[]): boolean {
  const got = Array.isArray(aud) ? aud : [aud];
  return got.some((value) => typeof value === "string" && allowed.includes(value));
}

async function loadAppleJwks(
  fetchJwks?: () => Promise<{ keys: Jwk[] }>,
): Promise<Jwk[]> {
  if (jwksCache && Date.now() - jwksCache.at < JWKS_TTL_MS) {
    return jwksCache.keys;
  }
  const body = fetchJwks
    ? await fetchJwks()
    : await (async () => {
        const res = await fetch(APPLE_JWKS_URL, { headers: { Accept: "application/json" } });
        if (!res.ok) throw new Error(`apple jwks ${res.status}`);
        return (await res.json()) as { keys: Jwk[] };
      })();
  const keys = Array.isArray(body.keys) ? body.keys : [];
  if (!keys.length) throw new Error("apple jwks empty");
  jwksCache = { at: Date.now(), keys };
  return keys;
}

export function resetAppleJwksCache() {
  jwksCache = null;
}

export async function verifyRs256(token: string, jwk: Jwk): Promise<boolean> {
  const parts = token.split(".");
  if (parts.length !== 3 || !jwk.n || !jwk.e) return false;
  try {
    const key = await crypto.subtle.importKey(
      "jwk",
      { kty: "RSA", n: jwk.n, e: jwk.e, alg: "RS256", ext: true },
      { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" },
      false,
      ["verify"],
    );
    const data = new TextEncoder().encode(`${parts[0]}.${parts[1]}`);
    const sig = Uint8Array.from(keyBytes(parts[2]));
    return crypto.subtle.verify("RSASSA-PKCS1-v1_5", key, sig, data);
  } catch {
    return false;
  }
}

function keyBytes(part: string): Uint8Array {
  return b64urlToBytes(part);
}

export function b64urlToBytes(raw: string): Uint8Array {
  const pad = raw.length % 4 === 0 ? "" : "=".repeat(4 - (raw.length % 4));
  const b64 = raw.replace(/-/g, "+").replace(/_/g, "/") + pad;
  const bin = atob(b64);
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}

export function bytesToB64url(bytes: Uint8Array): string {
  let bin = "";
  for (const b of bytes) bin += String.fromCharCode(b);
  return btoa(bin).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}
