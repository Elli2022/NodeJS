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
const logger_1 = require("../../app/libs/logger");
const config_1 = __importDefault(require("../config"));
const get_1 = __importDefault(require("../../app/component/use-cases/get"));
const chai_1 = require("chai");
const get = (params) => (0, get_1.default)({
    access: promises_1.access,
    readFile: promises_1.readFile,
    logger: logger_1.logger,
}).get(params, config_1.default.FILE_DB_PATH, config_1.default.FILE_DB_NAME);
describe("get", () => {
    before(() => __awaiter(void 0, void 0, void 0, function* () {
        const userObj = config_1.default.TEST_DATA;
        const users = [userObj.user1, userObj.user2];
        yield (0, promises_1.mkdir)(config_1.default.FILE_FOLDER_PATH, { recursive: true });
        yield (0, promises_1.writeFile)(config_1.default.FILE_DB_PATH, JSON.stringify(users));
    }));
    after(() => __awaiter(void 0, void 0, void 0, function* () { return (0, promises_1.rm)(config_1.default.FILE_FOLDER_PATH, { recursive: true, force: true }); }));
    it("should return a list of users", () => __awaiter(void 0, void 0, void 0, function* () {
        const results = yield get({ params: undefined });
        (0, chai_1.expect)(results.length).to.equal(2);
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdGVzdHMvdXNlLWNhc2VzL2dldC5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMENBQXFFO0FBQ3JFLGtEQUErQztBQUMvQyx1REFBK0I7QUFDL0IsNEVBQTBEO0FBQzFELCtCQUE4QjtBQUU5QixNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQ3JCLElBQUEsYUFBUyxFQUFDO0lBQ1IsTUFBTSxFQUFOLGlCQUFNO0lBQ04sUUFBUSxFQUFSLG1CQUFRO0lBQ1IsTUFBTSxFQUFOLGVBQU07Q0FDUCxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxnQkFBTSxDQUFDLFlBQVksRUFBRSxnQkFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBRTNELFFBQVEsQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFO0lBQ25CLE1BQU0sQ0FBQyxHQUFTLEVBQUU7UUFDaEIsTUFBTSxPQUFPLEdBQUcsZ0JBQU0sQ0FBQyxTQUFTLENBQUM7UUFDakMsTUFBTSxLQUFLLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3QyxNQUFNLElBQUEsZ0JBQUssRUFBQyxnQkFBTSxDQUFDLGdCQUFnQixFQUFFLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFDMUQsTUFBTSxJQUFBLG9CQUFTLEVBQUMsZ0JBQU0sQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzlELENBQUMsQ0FBQSxDQUFDLENBQUM7SUFFSCxLQUFLLENBQUMsR0FBUyxFQUFFLGtEQUFDLE9BQUEsSUFBQSxhQUFFLEVBQUMsZ0JBQU0sQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUEsR0FBQSxDQUFDLENBQUM7SUFFakYsRUFBRSxDQUFDLCtCQUErQixFQUFFLEdBQVMsRUFBRTtRQUM3QyxNQUFNLE9BQU8sR0FBRyxNQUFNLEdBQUcsQ0FBQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO1FBQ2pELElBQUEsYUFBTSxFQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyJ9