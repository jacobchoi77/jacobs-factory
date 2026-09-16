import assert from "node:assert/strict";
import { test } from "node:test";
import {
  APPLE_ISS,
  PLAYER_RE,
  appleAccount,
  appleAudiencesFromEnv,
  bytesToB64url,
  inferProvider,
  isRealName,
  sanitizeName,
  type Jwk,
} from "../../app/api/treadmill-cadence/board/identity";

const BUNDLE = "com.jacobsfactory.playcadence";
const APPLE_SUB = "001234.abcdef0123456789abcdef0123456789.0345";

test("sanitizeName matches the board fallback", () => {
  assert.equal(sanitizeName("  Mina  ", "id"), "Mina");
  assert.equal(sanitizeName("abcdefghijklmnopqrstuvwxyz", "id"), "abcdefghijklmnop");
  assert.equal(sanitizeName(" ", "xxxx-a3f2"), "Runner-A3F2");
  assert.equal(sanitizeName("", APPLE_SUB), "Runner-0345");
  assert.equal(isRealName("Mina"), true);
  assert.equal(isRealName(" "), false);
});

test("player ids accept Google numeric and Apple dotted subs", () => {
  assert.ok(PLAYER_RE.test("123456789012345678901"));
  assert.ok(PLAYER_RE.test(APPLE_SUB));
  assert.ok(!PLAYER_RE.test("short"));
  assert.ok(!PLAYER_RE.test("has space"));
  assert.ok(!PLAYER_RE.test("slash/id"));
});

test("provider is explicit or inferred from iss", () => {
  const appleJwt = unsignedJwt({ iss: APPLE_ISS, aud: BUNDLE, sub: APPLE_SUB });
  const googleJwt = unsignedJwt({
    iss: "https://accounts.google.com",
    aud: "web-client",
    sub: "1234567890",
  });
  assert.equal(inferProvider("apple", googleJwt), "apple");
  assert.equal(inferProvider("google", appleJwt), "google");
  assert.equal(inferProvider(undefined, appleJwt), "apple");
  assert.equal(inferProvider(undefined, googleJwt), "google");
  assert.equal(inferProvider(undefined, ""), null);
});

test("APPLE_CLIENT_ID and optional Services ID become audiences", () => {
  assert.deepEqual(
    appleAudiencesFromEnv({
      APPLE_CLIENT_ID: BUNDLE,
      APPLE_SERVICES_ID: "com.jacobsfactory.playcadence.web",
    }),
    [BUNDLE, "com.jacobsfactory.playcadence.web"],
  );
  assert.deepEqual(appleAudiencesFromEnv({ NODE_ENV: "test" } as NodeJS.ProcessEnv), []);
});

test("appleAccount verifies RS256, iss, aud, exp, and sub", async () => {
  const { jwk, sign } = await rsaSigner();
  const now = 1_800_000_000;
  const token = await sign({
    iss: APPLE_ISS,
    aud: BUNDLE,
    exp: now + 600,
    sub: APPLE_SUB,
  });
  const account = await appleAccount(token, {
    audiences: [BUNDLE],
    nowSec: now,
    jwks: { keys: [jwk] },
  });
  assert.deepEqual(account, { sub: APPLE_SUB, name: "", provider: "apple" });
});

test("appleAccount rejects a bad audience, issuer, expiry, or signature", async () => {
  const { jwk, sign } = await rsaSigner();
  const other = await rsaSigner();
  const now = 1_800_000_000;
  const claims = { iss: APPLE_ISS, aud: BUNDLE, exp: now + 600, sub: APPLE_SUB };
  const good = await sign(claims);

  assert.equal(
    await appleAccount(good, { audiences: ["other.bundle"], nowSec: now, jwks: { keys: [jwk] } }),
    null,
  );
  assert.equal(
    await appleAccount(await sign({ ...claims, iss: "https://evil.example" }), {
      audiences: [BUNDLE],
      nowSec: now,
      jwks: { keys: [jwk] },
    }),
    null,
  );
  assert.equal(
    await appleAccount(await sign({ ...claims, exp: now - 120 }), {
      audiences: [BUNDLE],
      nowSec: now,
      jwks: { keys: [jwk] },
    }),
    null,
  );
  assert.equal(
    await appleAccount(good, { audiences: [BUNDLE], nowSec: now, jwks: { keys: [other.jwk] } }),
    null,
  );
});

function unsignedJwt(payload: Record<string, unknown>): string {
  const header = { alg: "none", typ: "JWT" };
  return `${b64json(header)}.${b64json(payload)}.`;
}

function b64json(value: unknown): string {
  return bytesToB64url(new TextEncoder().encode(JSON.stringify(value)));
}

async function rsaSigner(): Promise<{
  jwk: Jwk;
  sign: (payload: Record<string, unknown>) => Promise<string>;
}> {
  const pair = await crypto.subtle.generateKey(
    {
      name: "RSASSA-PKCS1-v1_5",
      modulusLength: 2048,
      publicExponent: new Uint8Array([1, 0, 1]),
      hash: "SHA-256",
    },
    true,
    ["sign", "verify"],
  );
  const pub = (await crypto.subtle.exportKey("jwk", pair.publicKey)) as Jwk;
  const kid = "test-kid";
  const jwk: Jwk = { kty: "RSA", kid, alg: "RS256", n: pub.n, e: pub.e };
  return {
    jwk,
    sign: async (payload) => {
      const header = b64json({ alg: "RS256", typ: "JWT", kid });
      const body = b64json(payload);
      const data = new TextEncoder().encode(`${header}.${body}`);
      const sig = new Uint8Array(await crypto.subtle.sign("RSASSA-PKCS1-v1_5", pair.privateKey, data));
      return `${header}.${body}.${bytesToB64url(sig)}`;
    },
  };
}
