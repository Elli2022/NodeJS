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
// import { readFile } from "fs/promises";
function createGet({ access, readFile, logger }) {
    return Object.freeze({ get });
    function get(params, filePath, filename) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                logger.info(`[USE-CASE] [GET] Reading from files ${filename} -START!`);
                yield access(filePath);
                const fileContent = yield readFile(filePath);
                logger.info(`[USE-CASE] [GET] Reading from files ${filename} -END!`);
                return JSON.parse(fileContent);
            }
            catch (e) {
                throw e.message;
            }
        });
    }
}
exports.default = createGet;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FwcC9jb21wb25lbnQvdXNlLWNhc2VzL2dldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDBDQUEwQztBQUMxQyxTQUF3QixTQUFTLENBQUMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRTtJQUM1RCxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBRTlCLFNBQWUsR0FBRyxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsUUFBUTs7WUFDM0MsSUFBSTtnQkFDRixNQUFNLENBQUMsSUFBSSxDQUFDLHVDQUF1QyxRQUFRLFVBQVUsQ0FBQyxDQUFDO2dCQUN2RSxNQUFNLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDdkIsTUFBTSxXQUFXLEdBQUcsTUFBTSxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQzdDLE1BQU0sQ0FBQyxJQUFJLENBQUMsdUNBQXVDLFFBQVEsUUFBUSxDQUFDLENBQUM7Z0JBQ3JFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUNoQztZQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNWLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQzthQUNqQjtRQUNILENBQUM7S0FBQTtBQUNILENBQUM7QUFkRCw0QkFjQyJ9