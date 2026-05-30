"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const winston_1 = require("winston");
const transports_1 = __importDefault(require("./libs/transports"));
const { combine, timestamp, errors } = winston_1.format;
const ownTransports = (() => (0, transports_1.default)({ format: winston_1.format, transports: winston_1.transports }).logger())();
const logger = (0, winston_1.createLogger)({
    format: combine(errors({ stack: true }), timestamp({ format: "YYYY-MM-DD HH:mm:ss" })),
    defaultMeta: { service: process.env.NAME },
    transports: ownTransports,
});
exports.logger = logger;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBwL2xpYnMvbG9nZ2VyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHFDQUEyRDtBQUMzRCxtRUFBaUQ7QUFFakQsTUFBTSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEdBQUcsZ0JBQU0sQ0FBQztBQUM5QyxNQUFNLGFBQWEsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUMxQixJQUFBLG9CQUFnQixFQUFDLEVBQUUsTUFBTSxFQUFOLGdCQUFNLEVBQUUsVUFBVSxFQUFWLG9CQUFVLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQztBQUV2RCxNQUFNLE1BQU0sR0FBRyxJQUFBLHNCQUFZLEVBQUM7SUFDMUIsTUFBTSxFQUFFLE9BQU8sQ0FDYixNQUFNLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFDdkIsU0FBUyxDQUFDLEVBQUUsTUFBTSxFQUFFLHFCQUFxQixFQUFFLENBQUMsQ0FDN0M7SUFDRCxXQUFXLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUU7SUFDMUMsVUFBVSxFQUFFLGFBQWE7Q0FDMUIsQ0FBQyxDQUFDO0FBRU0sd0JBQU0ifQ==