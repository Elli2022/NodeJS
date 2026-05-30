"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const config_1 = __importDefault(require("../tests/config"));
const express_1 = require("./initializers/express");
const logger_1 = require("./libs/logger");
const name = process.env.NAME;
const hostname = process.env.NODE_HOSTNAME;
const port = process.env.NODE_PORT;
try {
    logger_1.logger.info(`[${config_1.default.APP_NAME}] Bootstraping micro service`);
    (0, express_1.server)({ hostname: config_1.default.NODE_HOSTNAME, port: config_1.default.NODE_PORT });
}
catch (error) {
    logger_1.logger.error(`[${name}] Caught exception: ${error}`);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYXBwL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTNCLDZEQUFxQztBQUNyQyxvREFBZ0Q7QUFDaEQsMENBQXVDO0FBRXZDLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDO0FBQzlCLE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDO0FBQzNDLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDO0FBRW5DLElBQUk7SUFDRixlQUFNLENBQUMsSUFBSSxDQUFDLElBQUksZ0JBQU0sQ0FBQyxRQUFRLDhCQUE4QixDQUFDLENBQUM7SUFDL0QsSUFBQSxnQkFBTSxFQUFDLEVBQUUsUUFBUSxFQUFFLGdCQUFNLENBQUMsYUFBYSxFQUFFLElBQUksRUFBRSxnQkFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7Q0FDcEU7QUFBQyxPQUFPLEtBQUssRUFBRTtJQUNkLGVBQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLHVCQUF1QixLQUFLLEVBQUUsQ0FBQyxDQUFDO0NBQ3REIn0=