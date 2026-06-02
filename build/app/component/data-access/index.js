"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readFromFile = exports.writeToFile = exports.checkDir = void 0;
const promises_1 = require("node:fs/promises");
// import config from "../../config";
const logger_1 = require("../../libs/logger");
const check_dir_1 = __importDefault(require("./check-dir"));
const write_to_file_1 = __importDefault(require("./write-to-file"));
const read_from_file_1 = __importDefault(require("./read-from-file"));
const checkDir = ({ fileDirPath, fileDirName }) => (0, check_dir_1.default)({ access: promises_1.access, mkdir: promises_1.mkdir, logger: logger_1.logger }).checkDir({
    fileDirPath,
    fileDirName,
});
exports.checkDir = checkDir;
const writeToFile = ({ content, filePath, filename }) => (0, write_to_file_1.default)({ writeFile: promises_1.writeFile, logger: logger_1.logger }).writeToFile({
    content,
    filePath,
    filename,
});
exports.writeToFile = writeToFile;
const readFromFile = ({ filePath, filename }) => (0, read_from_file_1.default)({ readFile: promises_1.readFile, logger: logger_1.logger }).readFromFile({ filePath, filename });
exports.readFromFile = readFromFile;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBwL2NvbXBvbmVudC9kYXRhLWFjY2Vzcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSwrQ0FBc0U7QUFDdEUscUNBQXFDO0FBQ3JDLDhDQUEyQztBQUMzQyw0REFBdUM7QUFDdkMsb0VBQThDO0FBQzlDLHNFQUFnRDtBQUVoRCxNQUFNLFFBQVEsR0FBRyxDQUFDLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxFQUFFLEVBQUUsQ0FDaEQsSUFBQSxtQkFBWSxFQUFDLEVBQUUsTUFBTSxFQUFOLGlCQUFNLEVBQUUsS0FBSyxFQUFMLGdCQUFLLEVBQUUsTUFBTSxFQUFOLGVBQU0sRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDO0lBQy9DLFdBQVc7SUFDWCxXQUFXO0NBQ1osQ0FBQyxDQUFDO0FBWUksNEJBQVE7QUFWakIsTUFBTSxXQUFXLEdBQUcsQ0FBQyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxDQUN0RCxJQUFBLHVCQUFlLEVBQUMsRUFBRSxTQUFTLEVBQVQsb0JBQVMsRUFBRSxNQUFNLEVBQU4sZUFBTSxFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUM7SUFDakQsT0FBTztJQUNQLFFBQVE7SUFDUixRQUFRO0NBQ1QsQ0FBQyxDQUFDO0FBS2Msa0NBQVc7QUFIOUIsTUFBTSxZQUFZLEdBQUcsQ0FBQyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLENBQzlDLElBQUEsd0JBQWdCLEVBQUMsRUFBRSxRQUFRLEVBQVIsbUJBQVEsRUFBRSxNQUFNLEVBQU4sZUFBTSxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztBQUU5QyxvQ0FBWSJ9