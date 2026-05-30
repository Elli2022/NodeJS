"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promises_1 = require("fs/promises");
const logger_1 = require("../../../libs/logger");
const config_1 = __importDefault(require("./../../tests/config"));
const get_1 = __importDefault(require("./../../app/component/use-cases/get")); // Antagit att ".ts" inte behövs
const node_test_1 = require("node:test");
const chai_1 = require("chai");
const get = (params) => (0, get_1.default)({
    access: promises_1.access,
    readFile: promises_1.readFile,
    logger: logger_1.logger,
}).get(params, config_1.default.FILE_DB_PATH, config_1.default.FILE_DB_NAME);
(0, node_test_1.describe)("get", () => {
    (0, node_test_1.before)(() => __awaiter(void 0, void 0, void 0, function* () {
        const userObj = config_1.default.TEST_DATA;
        const users = [userObj.user1, userObj.user2];
        yield (0, promises_1.mkdir)(config_1.default.FILE_FOLDER_PATH);
        yield (0, promises_1.writeFile)(config_1.default.FILE_DB_PATH, JSON.stringify(users));
    }));
    (0, node_test_1.after)(() => __awaiter(void 0, void 0, void 0, function* () { return (0, promises_1.rm)(config_1.default.FILE_FOLDER_PATH, { recursive: true }); }));
    (0, node_test_1.it)("should return a list of users", () => __awaiter(void 0, void 0, void 0, function* () {
        const results = yield get({ params: undefined });
        (0, chai_1.expect)(results.length).to.equal(2);
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdGVzdHMvdXNlLWNhc2VzL2dldC5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMENBQXFFO0FBQ3JFLGlEQUE4QztBQUM5QyxrRUFBMEM7QUFDMUMsOEVBQTRELENBQUMsZ0NBQWdDO0FBQzdGLHlDQUF3RDtBQUN4RCwrQkFBOEI7QUFFOUIsTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUNyQixJQUFBLGFBQVMsRUFBQztJQUNSLE1BQU0sRUFBTixpQkFBTTtJQUNOLFFBQVEsRUFBUixtQkFBUTtJQUNSLE1BQU0sRUFBTixlQUFNO0NBQ1AsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsZ0JBQU0sQ0FBQyxZQUFZLEVBQUUsZ0JBQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUUzRCxJQUFBLG9CQUFRLEVBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUNuQixJQUFBLGtCQUFNLEVBQUMsR0FBUyxFQUFFO1FBQ2hCLE1BQU0sT0FBTyxHQUFHLGdCQUFNLENBQUMsU0FBUyxDQUFDO1FBQ2pDLE1BQU0sS0FBSyxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0MsTUFBTSxJQUFBLGdCQUFLLEVBQUMsZ0JBQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3JDLE1BQU0sSUFBQSxvQkFBUyxFQUFDLGdCQUFNLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUM5RCxDQUFDLENBQUEsQ0FBQyxDQUFDO0lBRUgsSUFBQSxpQkFBSyxFQUFDLEdBQVMsRUFBRSxrREFBQyxPQUFBLElBQUEsYUFBRSxFQUFDLGdCQUFNLENBQUMsZ0JBQWdCLEVBQUUsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQSxHQUFBLENBQUMsQ0FBQztJQUVwRSxJQUFBLGNBQUUsRUFBQywrQkFBK0IsRUFBRSxHQUFTLEVBQUU7UUFDN0MsTUFBTSxPQUFPLEdBQUcsTUFBTSxHQUFHLENBQUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztRQUNqRCxJQUFBLGFBQU0sRUFBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyQyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMifQ==