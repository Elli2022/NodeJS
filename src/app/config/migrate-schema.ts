import { neon } from "@neondatabase/serverless";

export async function migrateSchema(connectionString: string) {
  const sql = neon(connectionString);
  await sql`
    CREATE TABLE IF NOT EXISTS users (
      username TEXT PRIMARY KEY,
      password TEXT NOT NULL,
      created BIGINT NOT NULL,
      modified BIGINT NOT NULL
    )
  `;
}
