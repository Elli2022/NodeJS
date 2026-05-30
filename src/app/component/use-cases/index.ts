import { access, mkdir, writeFile } from "fs";
import createPost from "./post";
import { logger } from "../../libs/logger";

const baseDir = process.cwd();
const fileDir = baseDir + process.env.NODE_FILE_FOLDER;
const filename = process.env.NODE_DB_FILE;
export const filePath = `${fileDir}/${filename}`;

const post = async ({ params }) =>
  await createPost({ logger, access, mkdir, writeFile }).post({
    params,
    filePath,
    fileDir,
  });

export { post };
