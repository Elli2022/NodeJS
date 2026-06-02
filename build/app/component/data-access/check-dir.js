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
function makeCheckDir({ access, mkdir, logger }) {
    return Object.freeze({ checkDir });
    function checkDir({ fileDirPath, fileDirName }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                logger.info(`[DATA-ACCESS][CHECK-DIR] Checking ${fileDirName}`);
                yield access(fileDirPath);
                logger.info(`[DATA-ACCESS][CHECK-DIR] ${fileDirName} exists`);
                return;
            }
            catch (_a) {
                logger.info(`[DATA-ACCESS][CHECK-DIR] Creating ${fileDirName}`);
                yield mkdir(fileDirPath);
                logger.info(`[DATA-ACCESS][CHECK-DIR] ${fileDirName} created`);
                return;
            }
        });
    }
}
exports.default = makeCheckDir;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2stZGlyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FwcC9jb21wb25lbnQvZGF0YS1hY2Nlc3MvY2hlY2stZGlyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsU0FBd0IsWUFBWSxDQUFDLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUU7SUFDNUQsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUNuQyxTQUFlLFFBQVEsQ0FBQyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUU7O1lBQ2xELElBQUk7Z0JBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQyxxQ0FBcUMsV0FBVyxFQUFFLENBQUMsQ0FBQztnQkFDaEUsTUFBTSxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQzFCLE1BQU0sQ0FBQyxJQUFJLENBQUMsNEJBQTRCLFdBQVcsU0FBUyxDQUFDLENBQUM7Z0JBQzlELE9BQU87YUFDUjtZQUFDLFdBQU07Z0JBQ04sTUFBTSxDQUFDLElBQUksQ0FBQyxxQ0FBcUMsV0FBVyxFQUFFLENBQUMsQ0FBQztnQkFDaEUsTUFBTSxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ3pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsNEJBQTRCLFdBQVcsVUFBVSxDQUFDLENBQUM7Z0JBQy9ELE9BQU87YUFDUjtRQUNILENBQUM7S0FBQTtBQUNILENBQUM7QUFmRCwrQkFlQyJ9