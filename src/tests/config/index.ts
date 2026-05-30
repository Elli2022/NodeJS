import * as path from "path";
const APP_NAME = process.env.NODE_NAME;
const NODE_ENV = "test";
const NODE_HOSTNAME = process.env.NODE_HOSTNAME;
const NODE_PORT = process.env.NODE_PORT;
const FILE_FOLDER_NAME = "data";
const FILE_FOLDER_PATH = path.join(__dirname, "/data/");
const FILE_DB_NAME = "users.json";
const FILE_DB_PATH = `${FILE_FOLDER_PATH}/${FILE_DB_NAME}`;
const ERROR_MSG = {
  post: {
    NO_DATA: "no data to insert",
    EXISTING_USER: "user already exists",
  },
};

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
  APP_NAME,
  ERROR_MSG,
  NODE_ENV,
  NODE_HOSTNAME,
  NODE_PORT,
  FILE_FOLDER_NAME,
  FILE_FOLDER_PATH,
  FILE_DB_NAME,
  FILE_DB_PATH,
  TEST_DATA,
});
