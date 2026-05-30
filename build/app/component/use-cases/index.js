"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = exports.post = void 0;
const promises_1 = require("node:fs/promises");
const post_1 = __importDefault(require("./post"));
const get_1 = __importDefault(require("./get"));
const config_1 = __importDefault(require("../../../tests/config"));
const logger_1 = require("../../libs/logger");
const fileDirName = config_1.default.FILE_FOLDER_NAME;
const fileDirPath = config_1.default.FILE_FOLDER_PATH;
const filename = config_1.default.FILE_DB_NAME;
const filePath = config_1.default.FILE_DB_PATH;
const errorMsgs = config_1.default.ERROR_MSG;
const post = ({ params }) => (0, post_1.default)({
    access: promises_1.access,
    mkdir: promises_1.mkdir,
    writeFile: promises_1.writeFile,
    readFile: promises_1.readFile,
    logger: logger_1.logger,
}).post({ params, filename, fileDirPath, fileDirName, filePath, errorMsgs });
exports.post = post;
const get = ({ params }) => (0, get_1.default)({
    access: promises_1.access,
    readFile: promises_1.readFile,
    logger: logger_1.logger,
}).get(params, filePath, filename); // Här lägger vi till alla förväntade parametrar
exports.get = get;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBwL2NvbXBvbmVudC91c2UtY2FzZXMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsK0NBQXNFO0FBQ3RFLGtEQUFnQztBQUNoQyxnREFBOEI7QUFDOUIsbUVBQTJDO0FBQzNDLDhDQUEyQztBQUUzQyxNQUFNLFdBQVcsR0FBRyxnQkFBTSxDQUFDLGdCQUFnQixDQUFDO0FBQzVDLE1BQU0sV0FBVyxHQUFHLGdCQUFNLENBQUMsZ0JBQWdCLENBQUM7QUFDNUMsTUFBTSxRQUFRLEdBQUcsZ0JBQU0sQ0FBQyxZQUFZLENBQUM7QUFDckMsTUFBTSxRQUFRLEdBQUcsZ0JBQU0sQ0FBQyxZQUFZLENBQUM7QUFDckMsTUFBTSxTQUFTLEdBQUcsZ0JBQU0sQ0FBQyxTQUFTLENBQUM7QUFFbkMsTUFBTSxJQUFJLEdBQUcsQ0FBQyxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsQ0FDMUIsSUFBQSxjQUFVLEVBQUM7SUFDVCxNQUFNLEVBQU4saUJBQU07SUFDTixLQUFLLEVBQUwsZ0JBQUs7SUFDTCxTQUFTLEVBQVQsb0JBQVM7SUFDVCxRQUFRLEVBQVIsbUJBQVE7SUFDUixNQUFNLEVBQU4sZUFBTTtDQUNQLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7QUFTdEUsb0JBQUk7QUFQYixNQUFNLEdBQUcsR0FBRyxDQUFDLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxDQUN6QixJQUFBLGFBQVMsRUFBQztJQUNSLE1BQU0sRUFBTixpQkFBTTtJQUNOLFFBQVEsRUFBUixtQkFBUTtJQUNSLE1BQU0sRUFBTixlQUFNO0NBQ1AsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsZ0RBQWdEO0FBRXZFLGtCQUFHIn0=