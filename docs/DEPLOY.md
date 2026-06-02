# Deploy live API (Render + Neon)

This stack is what recruiters see: **docs on Netlify**, **live REST API on Render**, **Postgres on Neon**.

## 1. Neon (database)

1. Create a free project at [neon.tech](https://neon.tech).
2. Copy the **connection string** (`postgresql://...?sslmode=require`).
3. No manual SQL needed — the app runs `CREATE TABLE IF NOT EXISTS users` on boot.

## 2. Render (API)

1. Push this repo to GitHub (`main`).
2. [Render Dashboard](https://dashboard.render.com) → **New** → **Blueprint** (or Web Service from repo).
3. If using Blueprint, point at `render.yaml` in the repo.
4. Set environment variable:
   - `DATABASE_URL` = your Neon connection string
5. Deploy. Note the URL, e.g. `https://nodejs-microservice-exercises.onrender.com`.

Render free tier sleeps after ~15 min idle; first request may take 30–60s.

## 3. Netlify (docs only)

Already deployed from `public/`. After Render is live, update `public/index.html` **Live API** link to your Render URL and redeploy Netlify.

## 4. Verify

```bash
curl https://YOUR-SERVICE.onrender.com/health
# {"ok":true,"service":"nodejs-microservice","storage":"postgres"}

API_URL=https://YOUR-SERVICE.onrender.com npm run smoke:live
```

## Local dev with Postgres (optional)

```bash
cp .env.example .env
# set STORAGE=postgres and DATABASE_URL=...
npm run build && npm run migrate && npm run start:prod
```

Tests always use filesystem storage under `src/tests/config/data/`.
