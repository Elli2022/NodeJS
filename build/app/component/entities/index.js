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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeInputObj = void 0;
const sanitize_html_1 = __importDefault(require("sanitize-html"));
const crypto = __importStar(require("crypto"));
const config_1 = __importDefault(require("../../../tests/config"));
const make_input_object_1 = __importDefault(require("./make-input-object"));
const errorMsgs = config_1.default.ERROR_MSG.post;
const md5 = (text) => crypto.createHash("md5").update(text, "utf8").digest("hex");
const sanitize = (value) => (0, sanitize_html_1.default)(value, { allowedTags: [], allowedAttributes: {} });
const makeInputObj = ({ params }) => (0, make_input_object_1.default)({ md5, sanitize }).inputObj({ params, errorMsgs });
exports.makeInputObj = makeInputObj;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBwL2NvbXBvbmVudC9lbnRpdGllcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGtFQUF5QztBQUN6QywrQ0FBaUM7QUFDakMsbUVBQTJDO0FBQzNDLDRFQUFzRDtBQUV0RCxNQUFNLFNBQVMsR0FBRyxnQkFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7QUFFeEMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxJQUFZLEVBQUUsRUFBRSxDQUMzQixNQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBRTlELE1BQU0sUUFBUSxHQUFHLENBQUMsS0FBYSxFQUFFLEVBQUUsQ0FDakMsSUFBQSx1QkFBWSxFQUFDLEtBQUssRUFBRSxFQUFFLFdBQVcsRUFBRSxFQUFFLEVBQUUsaUJBQWlCLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUVsRSxNQUFNLFlBQVksR0FBRyxDQUFDLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxDQUNsQyxJQUFBLDJCQUFtQixFQUFDLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7QUFFaEUsb0NBQVkifQ==