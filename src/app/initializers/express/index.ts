import express from "express";
import bodyParser from "body-parser";
import compression from "compression";
import cors from "cors";
import helmet from "helmet";
import createServer from "./libs/express";
import { routes } from "../../component/controller";
import { logger } from "../../libs/logger";

const app = express();

const server = ({ hostname, port }) => {
  createServer({
    json: express.json,
    urlencoded: express.urlencoded,
    app,
    handler: { routes: [] }, // Tillfällig lösning tills du har en faktisk handler.
    cors,
    compression,
    helmet,
    logger,
  }).server({ hostname, port });

  // Lägg till dina rutter här istället för i createServer
  routes.forEach((route) => {
    app[route.method](route.path, route.component);
  });
};

export { server };
