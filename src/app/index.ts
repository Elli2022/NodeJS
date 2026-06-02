require("dotenv").config();

import appConfig from "./config";
import { migrateSchema } from "./config/migrate-schema";
import { server } from "./initializers/express";
import { logger } from "./libs/logger";

async function bootstrap() {
  try {
    logger.info(`[${appConfig.APP_NAME}] Bootstrapping microservice (${appConfig.STORAGE})`);

    if (appConfig.STORAGE === "postgres") {
      await migrateSchema(appConfig.DATABASE_URL);
      logger.info("[bootstrap] Postgres schema ready");
    }

    server({
      hostname: appConfig.NODE_HOSTNAME,
      port: appConfig.NODE_PORT,
      storage: appConfig.STORAGE,
    });
  } catch (error) {
    logger.error(`[${appConfig.APP_NAME}] Bootstrap failed: ${error}`);
    process.exit(1);
  }
}

bootstrap();
