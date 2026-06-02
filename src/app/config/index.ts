import path from "node:path";

const ERROR_MSG = {
  post: {
    NO_DATA: "no data to insert",
    EXISTING_USER: "user already exists",
    MISSING_PARAMETER: "missing parameter: ",
    INVALID_STRING: "invalid string: ",
  },
};

const storageFromEnv = process.env.STORAGE?.toLowerCase();
const STORAGE: "file" | "postgres" =
  storageFromEnv === "postgres"
    ? "postgres"
    : storageFromEnv === "file"
      ? "file"
      : process.env.DATABASE_URL
        ? "postgres"
        : "file";

const FILE_FOLDER_NAME = "data";
const FILE_FOLDER_PATH =
  process.env.FILE_DATA_DIR || path.join(process.cwd(), FILE_FOLDER_NAME);
const FILE_DB_NAME = "users.json";
const FILE_DB_PATH = path.join(FILE_FOLDER_PATH, FILE_DB_NAME);

export default Object.freeze({
  APP_NAME: process.env.NODE_NAME || "nodejs-ms",
  NODE_HOSTNAME: process.env.NODE_HOSTNAME || "0.0.0.0",
  NODE_PORT: Number(process.env.PORT || process.env.NODE_PORT || 3000),
  NODE_ENV: process.env.NODE_ENV || "development",
  STORAGE,
  DATABASE_URL: process.env.DATABASE_URL || "",
  FILE_FOLDER_NAME,
  FILE_FOLDER_PATH,
  FILE_DB_NAME,
  FILE_DB_PATH,
  ERROR_MSG,
});
