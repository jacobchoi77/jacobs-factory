# World board API

Canonical source for `https://jacobs-factory.vercel.app/api/treadmill-cadence/board`.

This folder is **not** deployed from TreadmillCadence. The live function lives in
the `jacobs-factory` repo (Vercel), copied from here. After changing
`route.ts` / `identity.ts`, port the same files there and redeploy Vercel or
scores will 401 on Apple tokens.

```
jacobs-factory: app/api/treadmill-cadence/board/   ← live
this repo:      web/leaderboard/                   ← edit here first
```

GET stays public. POST verifies an identity token, then `ZADD`s a best score.

## POST body

Android (unchanged):

```json
{ "trackId": "board_20-25_180-200", "score": 18400, "idToken": "<google jwt>", "nickname": "Mina" }
```

iOS:

```json
{ "trackId": "board_20-25_180-200", "score": 18400, "idToken": "<apple jwt>", "provider": "apple", "nickname": "Mina" }
```

`provider` is optional. If omitted, `iss` on the JWT selects Apple
(`https://appleid.apple.com`) vs Google. Android does not send `provider`.

## Display name

1. Google token `name`, if present.
2. Else `nickname` from the body (Apple only sends a name on first Sign in
   with Apple; the iPhone stores it and posts it here).
3. Else `Runner-XXXX` (last 4 of `sub`). A fallback never overwrites a name
   already stored on `player:{sub}`.

Email is not used as a display name — Apple often hides it behind a relay.

Account id is the token `sub`. Google stays a numeric id. Apple is the
team-scoped user id (`001234.abc…`). The two never collide.

## Vercel env (jacobs-factory)

Do not invent secrets. Identity-token verify uses public JWKS / tokeninfo.

| Var | Required | Value |
|---|---|---|
| `UPSTASH_REDIS_REST_URL` | yes | existing |
| `UPSTASH_REDIS_REST_TOKEN` | yes | existing |
| `GOOGLE_WEB_CLIENT_ID` | Android | existing Web client id |
| `APPLE_CLIENT_ID` | iOS | `com.jacobsfactory.playcadence` (native identity-token `aud`) |
| `APPLE_SERVICES_ID` | no | only if a web Sign in with Apple is added later |

Placeholder for the Vercel UI:

```
APPLE_CLIENT_ID=com.jacobsfactory.playcadence
# APPLE_SERVICES_ID=com.jacobsfactory.playcadence.web
```

No Apple private key / client secret is needed for this POST.

## Local check

```bash
node --experimental-strip-types --test web/leaderboard/identity.test.ts
```
