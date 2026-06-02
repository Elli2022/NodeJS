import type { UserRecord, UserRepository } from "./types";

export default function makeFileUserRepository({
  checkDir,
  readFromFile,
  writeToFile,
  filePath,
  filename,
  fileDirPath,
  fileDirName,
  existingUserMessage,
}: {
  checkDir: (args: {
    fileDirPath: string;
    fileDirName: string;
  }) => Promise<void>;
  readFromFile: (args: {
    filePath: string;
    filename: string;
  }) => Promise<UserRecord[]>;
  writeToFile: (args: {
    content: UserRecord[];
    filePath: string;
    filename: string;
  }) => Promise<void>;
  filePath: string;
  filename: string;
  fileDirPath: string;
  fileDirName: string;
  existingUserMessage: string;
}): UserRepository {
  return Object.freeze({
    findAll,
    insert,
  });

  async function findAll() {
    await checkDir({ fileDirPath, fileDirName });
    return readFromFile({ filePath, filename });
  }

  async function insert(user: UserRecord) {
    await checkDir({ fileDirPath, fileDirName });
    const content = await readFromFile({ filePath, filename });
    const duplicate = content.filter((el) => el.username == user.username);
    if (duplicate.length) throw new Error(existingUserMessage);
    content.push(user);
    await writeToFile({ content, filePath, filename });
    return user;
  }
}
