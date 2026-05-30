"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const express_1 = __importDefault(require("express"));
const compression_1 = __importDefault(require("compression"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const express_2 = __importDefault(require("./libs/express"));
const controller_1 = require("../../component/controller");
const logger_1 = require("../../libs/logger");
const app = (0, express_1.default)();
const server = ({ hostname, port }) => {
    (0, express_2.default)({
        json: express_1.default.json,
        urlencoded: express_1.default.urlencoded,
        app,
        handler: { routes: [] },
        cors: // Tillfällig lösning tills du har en faktisk handler.
        cors_1.default,
        compression: compression_1.default,
        helmet: helmet_1.default,
        logger: logger_1.logger,
    }).server({ hostname, port });
    // Lägg till dina rutter här istället för i createServer
    controller_1.routes.forEach((route) => {
        app[route.method](route.path, route.component);
    });
};
exports.server = server;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBwL2luaXRpYWxpemVycy9leHByZXNzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHNEQUE4QjtBQUU5Qiw4REFBc0M7QUFDdEMsZ0RBQXdCO0FBQ3hCLG9EQUE0QjtBQUM1Qiw2REFBMEM7QUFDMUMsMkRBQW9EO0FBQ3BELDhDQUEyQztBQUUzQyxNQUFNLEdBQUcsR0FBRyxJQUFBLGlCQUFPLEdBQUUsQ0FBQztBQUV0QixNQUFNLE1BQU0sR0FBRyxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUU7SUFDcEMsSUFBQSxpQkFBWSxFQUFDO1FBQ1gsSUFBSSxFQUFFLGlCQUFPLENBQUMsSUFBSTtRQUNsQixVQUFVLEVBQUUsaUJBQU8sQ0FBQyxVQUFVO1FBQzlCLEdBQUc7UUFDSCxPQUFPLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFO1FBQ3ZCLElBQUksRUFEcUIsc0RBQXNEO1FBQy9FLGNBQUk7UUFDSixXQUFXLEVBQVgscUJBQVc7UUFDWCxNQUFNLEVBQU4sZ0JBQU07UUFDTixNQUFNLEVBQU4sZUFBTTtLQUNQLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUU5Qix3REFBd0Q7SUFDeEQsbUJBQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtRQUN2QixHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2pELENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBRU8sd0JBQU0ifQ==