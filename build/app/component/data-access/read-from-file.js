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
function makeReadFromFile({ readFile, logger }) {
    return Object.freeze({ readFromFile });
    function readFromFile({ filePath, filename }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                logger.info(`[DATA-ACCESS][READ-FROM-FILE] Reading from ${filename} - START!`);
                const content = yield readFile(filePath, { encoding: "utf8" });
                logger.info(`[DATA-ACCESS][READ-FROM-FILE] Reading from ${filename} - DONE!`);
                return content && content.length ? JSON.parse(content) : [];
            }
            catch (e) {
                logger.info(`[DATA-ACCESS][READ-FROM-FILE] ${filename} - Does not exists!`);
                if (e.message.includes("no such"))
                    return [];
                throw e;
            }
        });
    }
}
exports.default = makeReadFromFile;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZC1mcm9tLWZpbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBwL2NvbXBvbmVudC9kYXRhLWFjY2Vzcy9yZWFkLWZyb20tZmlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLFNBQXdCLGdCQUFnQixDQUFDLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRTtJQUMzRCxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDO0lBRXZDLFNBQWUsWUFBWSxDQUFDLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRTs7WUFDaEQsSUFBSTtnQkFDRixNQUFNLENBQUMsSUFBSSxDQUNULDhDQUE4QyxRQUFRLFdBQVcsQ0FDbEUsQ0FBQztnQkFDRixNQUFNLE9BQU8sR0FBRyxNQUFNLFFBQVEsQ0FBQyxRQUFRLEVBQUUsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztnQkFDL0QsTUFBTSxDQUFDLElBQUksQ0FDVCw4Q0FBOEMsUUFBUSxVQUFVLENBQ2pFLENBQUM7Z0JBQ0YsT0FBTyxPQUFPLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO2FBQzdEO1lBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ1YsTUFBTSxDQUFDLElBQUksQ0FDVCxpQ0FBaUMsUUFBUSxxQkFBcUIsQ0FDL0QsQ0FBQztnQkFDRixJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQztvQkFBRSxPQUFPLEVBQUUsQ0FBQztnQkFDN0MsTUFBTSxDQUFDLENBQUM7YUFDVDtRQUNILENBQUM7S0FBQTtBQUNILENBQUM7QUFyQkQsbUNBcUJDIn0=