require("dotenv").config();

import config from "../tests/config";
import { server } from "./initializers/express";
import { logger } from "./libs/logger";

const name = process.env.NAME;
const hostname = process.env.NODE_HOSTNAME;
const port = process.env.NODE_PORT;

try {
  logger.info(`[${config.APP_NAME}] Bootstraping micro service`);
  server({ hostname: config.NODE_HOSTNAME, port: config.NODE_PORT });
} catch (error) {
  logger.error(`[${name}] Caught exception: ${error}`);
}
