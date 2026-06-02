require("dotenv").config();

import { migrateSchema } from "../app/config/migrate-schema";

async function main() {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    console.error("DATABASE_URL is required");
    process.exit(1);
  }
  await migrateSchema(connectionString);
  console.log("Schema migration complete");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
