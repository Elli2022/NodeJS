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
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const chai_1 = require("chai");
const config_1 = __importDefault(require("../config"));
const logger_1 = require("../../app/libs/logger");
const promises_1 = require("node:fs/promises");
const entities_1 = require("../../app/component/entities");
const data_access_1 = require("../../app/component/data-access");
const post_1 = __importDefault(require("../../app/component/use-cases/post"));
const post = ({ params }) => (0, post_1.default)({
    makeInputObj: entities_1.makeInputObj,
    checkDir: data_access_1.checkDir,
    readFromFile: data_access_1.readFromFile,
    writeToFile: data_access_1.writeToFile,
    logger: logger_1.logger,
}).post({
    params,
    filename: config_1.default.FILE_DB_NAME,
    fileDirPath: config_1.default.FILE_FOLDER_PATH,
    fileDirName: config_1.default.FILE_FOLDER_NAME,
    filePath: config_1.default.FILE_DB_PATH,
    errorMsgs: config_1.default.ERROR_MSG.post,
});
describe("Post", () => {
    after(() => (0, promises_1.rm)(config_1.default.FILE_FOLDER_PATH, { recursive: true }));
    it("should insert a user", () => __awaiter(void 0, void 0, void 0, function* () {
        const params = {
            username: config_1.default.TEST_DATA.user1.username,
            password: config_1.default.TEST_DATA.user1.password,
        };
        const results = yield post({ params });
        const fileContent = yield (0, promises_1.readFile)(config_1.default.FILE_DB_PATH, {
            encoding: "utf8",
        });
        const users = JSON.parse(fileContent);
        (0, chai_1.expect)(results).to.have.property("username").equal(params.username);
        (0, chai_1.expect)(users.length).to.equal(1);
        (0, chai_1.expect)(users[0]).to.have.property("username").equal(params.username);
    }));
    it("should not insert an empty user", () => __awaiter(void 0, void 0, void 0, function* () {
        const params = {
            username: undefined,
            password: undefined,
        };
        try {
            yield post({ params });
        }
        catch (err) {
            (0, chai_1.expect)(err).to.equal(`${config_1.default.ERROR_MSG.post.MISSING_PARAMETER}username`);
        }
    }));
    it("should not insert an existing user", () => __awaiter(void 0, void 0, void 0, function* () {
        const params = {
            username: config_1.default.TEST_DATA.user1.username,
            password: config_1.default.TEST_DATA.user1.password,
        };
        try {
            yield post({ params });
        }
        catch (err) {
            (0, chai_1.expect)(err).to.equal(config_1.default.ERROR_MSG.post.EXISTING_USER);
        }
    }));
    it("should insert another user", () => __awaiter(void 0, void 0, void 0, function* () {
        const params = {
            username: config_1.default.TEST_DATA.user2.username,
            password: config_1.default.TEST_DATA.user2.password,
        };
        yield post({ params });
        const results = yield (0, promises_1.readFile)(config_1.default.FILE_DB_PATH, { encoding: "utf8" });
        (0, chai_1.expect)(Object.keys(JSON.parse(results)).length).to.equal(2);
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdC5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3Rlc3RzL3VzZS1jYXNlcy9wb3N0LnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBZ0Q7QUFDaEQsSUFBQSxlQUFZLEdBQUUsQ0FBQztBQUVmLCtCQUE4QjtBQUU5Qix1REFBK0I7QUFDL0Isa0RBQStDO0FBQy9DLCtDQUFnRDtBQUNoRCwyREFBNEQ7QUFDNUQsaUVBSXlDO0FBQ3pDLDhFQUE0RDtBQUM1RCxNQUFNLElBQUksR0FBRyxDQUFDLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxDQUMxQixJQUFBLGNBQVUsRUFBQztJQUNULFlBQVksRUFBWix1QkFBWTtJQUNaLFFBQVEsRUFBUixzQkFBUTtJQUNSLFlBQVksRUFBWiwwQkFBWTtJQUNaLFdBQVcsRUFBWCx5QkFBVztJQUNYLE1BQU0sRUFBTixlQUFNO0NBQ1AsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNOLE1BQU07SUFDTixRQUFRLEVBQUUsZ0JBQU0sQ0FBQyxZQUFZO0lBQzdCLFdBQVcsRUFBRSxnQkFBTSxDQUFDLGdCQUFnQjtJQUNwQyxXQUFXLEVBQUUsZ0JBQU0sQ0FBQyxnQkFBZ0I7SUFDcEMsUUFBUSxFQUFFLGdCQUFNLENBQUMsWUFBWTtJQUM3QixTQUFTLEVBQUUsZ0JBQU0sQ0FBQyxTQUFTLENBQUMsSUFBSTtDQUNqQyxDQUFDLENBQUM7QUFFTCxRQUFRLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRTtJQUNwQixLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBQSxhQUFFLEVBQUMsZ0JBQU0sQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFFOUQsRUFBRSxDQUFDLHNCQUFzQixFQUFFLEdBQVMsRUFBRTtRQUNwQyxNQUFNLE1BQU0sR0FBRztZQUNiLFFBQVEsRUFBRSxnQkFBTSxDQUFD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