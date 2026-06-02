import express from "express";

interface ServerOptions {
  json: typeof express.json;
  urlencoded: typeof express.urlencoded;
  app: express.Express;
  handler: { routes: any[] }; // Justera denna typ beroende på dina behov.
  cors: any;
  compression: any;
  helmet: any;
  logger: any; // Eller den specifika typen för din logger.
}

export default function createServer(options: ServerOptions) {
  return Object.freeze({ server });

  function server({ hostname = "localhost", port = 3000 }) {
    // Tillför standardvärden
    // const routes = handler.routes; // Eftersom detta inte används, kommenterar vi bort det.

    options.app.use(options.helmet());
    options.app.options("*", options.cors({ credentials: true, origin: true }));
    options.app.use(options.cors());
    options.app.use(options.compression());
    options.app.use(options.json());
    options.app.use(options.urlencoded({ extended: true }));

    options.app.get("/", (req, res) =>
      res.type("html").send(`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>NodeJS Microservice</title>
    <style>
      body { margin: 0; font-family: Inter, system-ui, -apple-system, Segoe UI, sans-serif; background:#0b1020; color:#e2e8f0; }
      .wrap { max-width: 860px; margin: 0 auto; padding: 48px 20px; }
      .card { background:#111a33; border:1px solid #1f2a4a; border-radius:16px; padding:24px; }
      h1 { margin:0 0 12px; font-size:32px; }
      p { color:#cbd5e1; line-height:1.6; }
      code { background:#0b1328; border:1px solid #1f2a4a; padding:2px 8px; border-radius:8px; }
      ul { line-height:1.8; }
      a { color:#93c5fd; text-decoration:none; }
    </style>
  </head>
  <body>
    <main class="wrap">
      <section class="card">
        <h1>NodeJS Microservice</h1>
        <p>Express + file system + testing/refactoring exercises with a cleaner API surface.</p>
        <ul>
          <li>Health check: <code>GET /health</code></li>
          <li>Users API: <code>GET /api/v1/</code> and <code>POST /api/v1/</code></li>
        </ul>
        <p>Repository: <a href="https://github.com/Elli2022/nodejs-microservice-exercises">https://github.com/Elli2022/nodejs-microservice-exercises</a></p>
      </section>
    </main>
  </body>
</html>`)
    );
    options.app.get("/health", (req, res) =>
      res.json({ ok: true, service: "nodejs-microservice" })
    );
    options.app.post("/", (req, res) => res.json({ body: req.body }));

    for (let route of options.handler.routes) {
      options.app[route.method](route.path, route.component);
    }

    options.app.listen(port, hostname, () => {
      options.logger.info(
        `[EXPRESS] Server running at http://${hostname}:${port}`
      );
      return;
    });
  }
}
