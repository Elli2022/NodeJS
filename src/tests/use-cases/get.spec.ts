import { writeFile, rm, mkdir } from "fs/promises";
import { logger } from "../../app/libs/logger";
import config from "../config";
import createGet from "../../app/component/use-cases/get";
import { makeUserRepository } from "../../app/component/repositories";
import { expect } from "chai";

const userRepository = makeUserRepository({
  storage: "file",
  databaseUrl: "",
  fileDirPath: config.FILE_FOLDER_PATH,
  fileDirName: config.FILE_FOLDER_NAME,
  filePath: config.FILE_DB_PATH,
  filename: config.FILE_DB_NAME,
  existingUserMessage: config.ERROR_MSG.post.EXISTING_USER,
});

const get = () =>
  createGet({
    userRepository,
    logger,
  }).get();

describe("get", () => {
  before(async () => {
    const userObj = config.TEST_DATA;
    const users = [userObj.user1, userObj.user2];
    await mkdir(config.FILE_FOLDER_PATH, { recursive: true });
    await writeFile(config.FILE_DB_PATH, JSON.stringify(users));
  });

  after(async () => rm(config.FILE_FOLDER_PATH, { recursive: true, force: true }));

  it("should return a list of users", async () => {
    const results = await get();
    expect(results.length).to.equal(2);
  });
});
