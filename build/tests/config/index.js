"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const path = __importStar(require("path"));
const APP_NAME = process.env.NODE_NAME;
const NODE_ENV = "test";
const NODE_HOSTNAME = process.env.NODE_HOSTNAME;
const NODE_PORT = process.env.NODE_PORT;
const FILE_FOLDER_NAME = "data";
const FILE_FOLDER_PATH = path.join(__dirname, "/data/");
const FILE_DB_NAME = "users.json";
const FILE_DB_PATH = `${FILE_FOLDER_PATH}/${FILE_DB_NAME}`;
const ERROR_MSG = {
    post: {
        NO_DATA: "no data to insert",
        EXISTING_USER: "user already exists",
    },
};
const TEST_DATA = {
    user1: {
        username: "user1",
        password: "password",
    },
    user2: {
        username: "user2",
        password: "password",
    },
};
exports.default = Object.freeze({
    APP_NAME,
    ERROR_MSG,
    NODE_ENV,
    NODE_HOSTNAME,
    NODE_PORT,
    FILE_FOLDER_NAME,
    FILE_FOLDER_PATH,
    FILE_DB_NAME,
    FILE_DB_PATH,
    TEST_DATA,
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdGVzdHMvY29uZmlnL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBNkI7QUFDN0IsTUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUM7QUFDdkMsTUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDO0FBQ3hCLE1BQU0sYUFBYSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDO0FBQ2hELE1BQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDO0FBQ3hDLE1BQU0sZ0JBQWdCLEdBQUcsTUFBTSxDQUFDO0FBQ2hDLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDeEQsTUFBTSxZQUFZLEdBQUcsWUFBWSxDQUFDO0FBQ2xDLE1BQU0sWUFBWSxHQUFHLEdBQUcsZ0JBQWdCLElBQUksWUFBWSxFQUFFLENBQUM7QUFDM0QsTUFBTSxTQUFTLEdBQUc7SUFDaEIsSUFBSSxFQUFFO1FBQ0osT0FBTyxFQUFFLG1CQUFtQjtRQUM1QixhQUFhLEVBQUUscUJBQXFCO0tBQ3JDO0NBQ0YsQ0FBQztBQUVGLE1BQU0sU0FBUyxHQUFHO0lBQ2hCLEtBQUssRUFBRTtRQUNMLFFBQVEsRUFBRSxPQUFPO1FBQ2pCLFFBQVEsRUFBRSxVQUFVO0tBQ3JCO0lBQ0QsS0FBSyxFQUFFO1FBQ0wsUUFBUSxFQUFFLE9BQU87UUFDakIsUUFBUSxFQUFFLFVBQVU7S0FDckI7Q0FDRixDQUFDO0FBRUYsa0JBQWUsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUMzQixRQUFRO0lBQ1IsU0FBUztJQUNULFFBQVE7SUFDUixhQUFhO0lBQ2IsU0FBUztJQUNULGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFlBQVk7SUFDWixTQUFTO0NBQ1YsQ0FBQyxDQUFDIn0=