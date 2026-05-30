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
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const logger_1 = require("../../libs/logger");
const use_cases_1 = require("../use-cases");
const baseUrl = "/api/v1";
const getEP = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const results = yield (0, use_cases_1.get)({ params: req.params });
        res.json({ err: 0, data: results });
    }
    catch (err) {
        logger_1.logger.info(`[EP][GET] ${req.method}: ${err.message}`);
        res.status(403);
        res.json({ err: 1, data: { err } });
    }
});
const postEP = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let results = yield (0, use_cases_1.post)({ params: req.body });
        res.json({ err: 0, data: results });
    }
    catch (err) {
        logger_1.logger.info(`[EP][POST] ${req.method}: ${err.message}`);
        res.status(403);
        res.json({ err: 1, data: { err } });
    }
});
const routes = [
    { path: `${baseUrl}/`, method: "get", component: getEP },
    { path: `${baseUrl}/`, method: "post", component: postEP },
];
exports.routes = routes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBwL2NvbXBvbmVudC9jb250cm9sbGVyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDhDQUEyQztBQUMzQyw0Q0FBeUM7QUFDekMsTUFBTSxPQUFPLEdBQUcsU0FBUyxDQUFDO0FBRTFCLE1BQU0sS0FBSyxHQUFHLENBQU8sR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQy9CLElBQUk7UUFDRixNQUFNLE9BQU8sR0FBRyxNQUFNLElBQUEsZUFBRyxFQUFDLEVBQUUsTUFBTSxFQUFFLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQ2xELEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO0tBQ3JDO0lBQUMsT0FBTyxHQUFHLEVBQUU7UUFDWixlQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLE1BQU0sS0FBSyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUN2RCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztLQUNyQztBQUNILENBQUMsQ0FBQSxDQUFDO0FBRUYsTUFBTSxNQUFNLEdBQUcsQ0FBTyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDaEMsSUFBSTtRQUNGLElBQUksT0FBTyxHQUFHLE1BQU0sSUFBQSxnQkFBSSxFQUFDLEVBQUUsTUFBTSxFQUFFLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQy9DLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO0tBQ3JDO0lBQUMsT0FBTyxHQUFHLEVBQUU7UUFDWixlQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLE1BQU0sS0FBSyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUN4RCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztLQUNyQztBQUNILENBQUMsQ0FBQSxDQUFDO0FBRUYsTUFBTSxNQUFNLEdBQUc7SUFDYixFQUFFLElBQUksRUFBRSxHQUFHLE9BQU8sR0FBRyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRTtJQUN4RCxFQUFFLElBQUksRUFBRSxHQUFHLE9BQU8sR0FBRyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRTtDQUMzRCxDQUFDO0FBRU8sd0JBQU0ifQ==