# nodejs-microservice-exercises

Node.js microservice exercises: Express REST API, repository pattern, Mocha tests, and progressive refactoring branches — deployed as a portfolio piece with **live API + Postgres**.

## Live

| Surface | URL |
|---------|-----|
| **Docs (Netlify)** | https://nodejs-microservice-modernized.netlify.app |
| **API (Render)** | https://nodejs-microservice-exercises.onrender.com |
| **Database** | [Neon](https://neon.tech) serverless Postgres |

```bash
curl https://nodejs-microservice-exercises.onrender.com/health
# {"ok":true,"service":"nodejs-microservice","storage":"postgres"}
```

## Stack

- **Express** + TypeScript, clean architecture (entities, use cases, repositories)
- **Neon Postgres** in production (`STORAGE=postgres`)
- **Filesystem** for local dev and unit tests (`STORAGE=file`)
- **Render** for API hosting · **Netlify** for static docs
- **Mocha** + smoke tests

## API endpoints

- `GET /` — HTML landing (same as docs)
- `GET /health` — `{ ok, service, storage }`
- `GET /api/v1/` — list users
- `POST /api/v1/` — create user (validation, sanitize, MD5 hash)

## Local development

```bash
npm install
NODE_HOSTNAME=127.0.0.1 NODE_PORT=3000 NODE_NAME=nodejs-ms npm start
```

Uses filesystem under `./data/users.json` by default.

## Tests

```bash
npm test
```

## Smoke tests

```bash
# Local API
NODE_HOSTNAME=127.0.0.1 NODE_PORT=3000 NODE_NAME=nodejs-ms npm run start:prod
npm run smoke

# Live API on Render
npm run smoke:live
```

## Deploy (Render + Neon)

See **[docs/DEPLOY.md](./docs/DEPLOY.md)** for step-by-step Neon database + Render web service setup.

## Branch history

- `version/base` … `version/testing-post-spec`
- `main` — modernized UI, live API, Postgres
