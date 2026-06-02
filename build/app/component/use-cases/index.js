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
const entities_1 = require("../entities");
const data_access_1 = require("../data-access");
const fileDirName = config_1.default.FILE_FOLDER_NAME;
const fileDirPath = config_1.default.FILE_FOLDER_PATH;
const filename = config_1.default.FILE_DB_NAME;
const filePath = config_1.default.FILE_DB_PATH;
const errorMsgs = config_1.default.ERROR_MSG;
const post = ({ params }) => (0, post_1.default)({
    makeInputObj: entities_1.makeInputObj,
    checkDir: data_access_1.checkDir,
    writeToFile: data_access_1.writeToFile,
    readFromFile: data_access_1.readFromFile,
    // access,
    // mkdir,
    // writeFile,
    // readFile,
    logger: logger_1.logger,
}).post({ params, filename, fileDirPath, fileDirName, filePath, errorMsgs });
exports.post = post;
const get = ({ params }) => (0, get_1.default)({
    access: promises_1.access,
    readFile: promises_1.readFile,
    logger: logger_1.logger,
}).get(params, filePath, filename); // Här lägger vi till alla förväntade parametrar
exports.get = get;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBwL2NvbXBvbmVudC91c2UtY2FzZXMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsK0NBQXNFO0FBQ3RFLGtEQUFnQztBQUNoQyxnREFBOEI7QUFDOUIsbUVBQTJDO0FBQzNDLDhDQUEyQztBQUMzQywwQ0FBMkM7QUFDM0MsZ0RBQXFFO0FBRXJFLE1BQU0sV0FBVyxHQUFHLGdCQUFNLENBQUMsZ0JBQWdCLENBQUM7QUFDNUMsTUFBTSxXQUFXLEdBQUcsZ0JBQU0sQ0FBQyxnQkFBZ0IsQ0FBQztBQUM1QyxNQUFNLFFBQVEsR0FBRyxnQkFBTSxDQUFDLFlBQVksQ0FBQztBQUNyQyxNQUFNLFFBQVEsR0FBRyxnQkFBTSxDQUFDLFlBQVksQ0FBQztBQUNyQyxNQUFNLFNBQVMsR0FBRyxnQkFBTSxDQUFDLFNBQVMsQ0FBQztBQUVuQyxNQUFNLElBQUksR0FBRyxDQUFDLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxDQUMxQixJQUFBLGNBQVUsRUFBQztJQUNULFlBQVksRUFBWix1QkFBWTtJQUNaLFFBQVEsRUFBUixzQkFBUTtJQUNSLFdBQVcsRUFBWCx5QkFBVztJQUNYLFlBQVksRUFBWiwwQkFBWTtJQUNaLFVBQVU7SUFDVixTQUFTO0lBQ1QsYUFBYTtJQUNiLFlBQVk7SUFDWixNQUFNLEVBQU4sZUFBTTtDQUNQLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7QUFTdEUsb0JBQUk7QUFQYixNQUFNLEdBQUcsR0FBRyxDQUFDLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxDQUN6QixJQUFBLGFBQVMsRUFBQztJQUNSLE1BQU0sRUFBTixpQkFBTTtJQUNOLFFBQVEsRUFBUixtQkFBUTtJQUNSLE1BQU0sRUFBTixlQUFNO0NBQ1AsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsZ0RBQWdEO0FBRXZFLGtCQUFHIn0=