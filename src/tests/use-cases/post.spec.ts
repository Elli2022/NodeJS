import { config as dotenvConfig } from "dotenv";
dotenvConfig();

import { expect } from "chai";
import config from "../config";
import { logger } from "../../app/libs/logger";
import { rm, readFile } from "node:fs/promises";
import { makeInputObj } from "../../app/component/entities";
import { makeUserRepository } from "../../app/component/repositories";
import createPost from "../../app/component/use-cases/post";

const userRepository = makeUserRepository({
  storage: "file",
  databaseUrl: "",
  fileDirPath: config.FILE_FOLDER_PATH,
  fileDirName: config.FILE_FOLDER_NAME,
  filePath: config.FILE_DB_PATH,
  filename: config.FILE_DB_NAME,
  existingUserMessage: config.ERROR_MSG.post.EXISTING_USER,
});

const post = ({ params }: { params: Record<string, unknown> }) =>
  createPost({
    makeInputObj,
    userRepository,
    logger,
    errorMsgs: config.ERROR_MSG.post,
  }).post({ params });

describe("Post", () => {
  after(() => rm(config.FILE_FOLDER_PATH, { recursive: true, force: true }));

  it("should insert a user", async () => {
    const params = {
      username: config.TEST_DATA.user1.username,
      password: config.TEST_DATA.user1.password,
    };
    const results = await post({ params });
    const fileContent = await readFile(config.FILE_DB_PATH, {
      encoding: "utf8",
    });
    const users = JSON.parse(fileContent);
    expect(results).to.have.property("username").equal(params.username);
    expect(users.length).to.equal(1);
    expect(users[0]).to.have.property("username").equal(params.username);
  });

  it("should not insert an empty user", async () => {
    const params = {
      username: undefined,
      password: undefined,
    };
    try {
      await post({ params });
    } catch (err) {
      expect((err as Error).message).to.equal(
        `${config.ERROR_MSG.post.MISSING_PARAMETER}username`
      );
    }
  });

  it("should not insert an existing user", async () => {
    const params = {
      username: config.TEST_DATA.user1.username,
      password: config.TEST_DATA.user1.password,
    };
    try {
      await post({ params });
    } catch (err) {
      expect((err as Error).message).to.equal(config.ERROR_MSG.post.EXISTING_USER);
    }
  });

  it("should insert another user", async () => {
    const params = {
      username: config.TEST_DATA.user2.username,
      password: config.TEST_DATA.user2.password,
    };
    await post({ params });
    const results = await readFile(config.FILE_DB_PATH, { encoding: "utf8" });
    expect(Object.keys(JSON.parse(results)).length).to.equal(2);
  });
});
