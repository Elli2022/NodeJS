import express from "express";
import { readFileSync } from "node:fs";
import path from "node:path";

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

    const landingPath = path.join(process.cwd(), "public", "index.html");
    const landingHtml = readFileSync(landingPath, "utf8");
    options.app.get("/", (req, res) => res.type("html").send(landingHtml));
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
