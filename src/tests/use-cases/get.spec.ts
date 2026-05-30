import { readFile, writeFile, rm, access, mkdir } from "fs/promises";
import { logger } from "../../app/libs/logger";
import config from "./../../tests/config";
import createGet from "./../../app/component/use-cases/get"; // Antagit att ".ts" inte behövs
import { after, before, it, describe } from "node:test";
import { expect } from "chai";

const get = (params) =>
  createGet({
    access,
    readFile,
    logger,
  }).get(params, config.FILE_DB_PATH, config.FILE_DB_NAME);

describe("get", () => {
  before(async () => {
    const userObj = config.TEST_DATA;
    const users = [userObj.user1, userObj.user2];
    await mkdir(config.FILE_FOLDER_PATH);
    await writeFile(config.FILE_DB_PATH, JSON.stringify(users));
  });

  after(async () => rm(config.FILE_FOLDER_PATH, { recursive: true }));

  it("should return a list of users", async () => {
    const results = await get({ params: undefined });
    expect(results.length).to.equal(2);
  });
});
