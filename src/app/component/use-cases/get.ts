// import { readFile } from "fs/promises";
export default function createGet({ access, readFile, logger }) {
  return Object.freeze({ get });

  async function get(params, filePath, filename) {
    try {
      logger.info(`[USE-CASE] [GET] Reading from files ${filename} -START!`);
      await access(filePath);
      const fileContent = await readFile(filePath);
      logger.info(`[USE-CASE] [GET] Reading from files ${filename} -END!`);
      return JSON.parse(fileContent);
    } catch (e) {
      throw e.message;
    }
  }
}
