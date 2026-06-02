import * as path from "path";
import appConfig from "../../app/config";

const FILE_FOLDER_NAME = "data";
const FILE_FOLDER_PATH = path.join(__dirname, "/data/");
const FILE_DB_NAME = "users.json";
const FILE_DB_PATH = path.join(FILE_FOLDER_PATH, FILE_DB_NAME);

const TEST_DATA = {
  user1: {
    username: "user1",
    password: "password",
  },
  user2: {
    username: "user2",
    password: "password",
  },
};

export default Object.freeze({
  APP_NAME: appConfig.APP_NAME,
  ERROR_MSG: appConfig.ERROR_MSG,
  NODE_ENV: "test",
  NODE_HOSTNAME: process.env.NODE_HOSTNAME,
  NODE_PORT: process.env.NODE_PORT,
  FILE_FOLDER_NAME,
  FILE_FOLDER_PATH,
  FILE_DB_NAME,
  FILE_DB_PATH,
  TEST_DATA,
});
