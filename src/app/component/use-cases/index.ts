import appConfig from "../../config";
import { logger } from "../../libs/logger";
import { makeInputObj } from "../entities";
import { makeUserRepository } from "../repositories";
import createPost from "./post";
import createGet from "./get";

const userRepository = makeUserRepository({
  storage: appConfig.STORAGE,
  databaseUrl: appConfig.DATABASE_URL,
  fileDirPath: appConfig.FILE_FOLDER_PATH,
  fileDirName: appConfig.FILE_FOLDER_NAME,
  filePath: appConfig.FILE_DB_PATH,
  filename: appConfig.FILE_DB_NAME,
  existingUserMessage: appConfig.ERROR_MSG.post.EXISTING_USER,
});

const get = () =>
  createGet({
    userRepository,
    logger,
  }).get();

const post = ({ params }: { params: Record<string, unknown> }) =>
  createPost({
    makeInputObj,
    userRepository,
    logger,
    errorMsgs: appConfig.ERROR_MSG.post,
  }).post({ params });

export { post, get, userRepository };
