import { neon } from "@neondatabase/serverless";
import type { UserRecord, UserRepository } from "./types";

export default function makePostgresUserRepository({
  connectionString,
  existingUserMessage,
}: {
  connectionString: string;
  existingUserMessage: string;
}): UserRepository {
  const sql = neon(connectionString);

  return Object.freeze({
    findAll,
    insert,
  });

  async function findAll(): Promise<UserRecord[]> {
    const rows = await sql`
      SELECT username, password, created, modified
      FROM users
      ORDER BY created ASC
    `;
    return rows.map((row) => ({
      username: row.username as string,
      password: row.password as string,
      created: Number(row.created),
      modified: Number(row.modified),
    }));
  }

  async function insert(user: UserRecord): Promise<UserRecord> {
    try {
      await sql`
        INSERT INTO users (username, password, created, modified)
        VALUES (${user.username}, ${user.password}, ${user.created}, ${user.modified})
      `;
      return user;
    } catch (e) {
      if ((e as { code?: string }).code === "23505") {
        throw new Error(existingUserMessage);
      }
      throw e;
    }
  }
}
