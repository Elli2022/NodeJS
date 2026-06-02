import { checkDir, readFromFile, writeToFile } from "../data-access";
import makeFileUserRepository from "./make-file-user-repository";
import makePostgresUserRepository from "./make-postgres-user-repository";
import type { UserRepository } from "./types";

type RepositoryConfig = {
  storage: "file" | "postgres";
  databaseUrl: string;
  fileDirPath: string;
  fileDirName: string;
  filePath: string;
  filename: string;
  existingUserMessage: string;
};

export function makeUserRepository(config: RepositoryConfig): UserRepository {
  if (config.storage === "postgres") {
    if (!config.databaseUrl) {
      throw new Error("DATABASE_URL is required when STORAGE=postgres");
    }
    return makePostgresUserRepository({
      connectionString: config.databaseUrl,
      existingUserMessage: config.existingUserMessage,
    });
  }

  return makeFileUserRepository({
    checkDir,
    readFromFile,
    writeToFile,
    filePath: config.filePath,
    filename: config.filename,
    fileDirPath: config.fileDirPath,
    fileDirName: config.fileDirName,
    existingUserMessage: config.existingUserMessage,
  });
}

export type { UserRecord, UserRepository } from "./types";
