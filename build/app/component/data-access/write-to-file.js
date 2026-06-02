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
function createWriteToFile({ writeFile, logger }) {
    return Object.freeze({ writeToFile });
    function writeToFile({ content, filePath, filename }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                logger.info(`[DATA-ACCESS][WRITE-TO-FILE] Writing to ${filename} - START!`);
                const newContent = JSON.stringify(content);
                yield writeFile(filePath, newContent);
                logger.info(`[DATA-ACCESS][WRITE-TO-FILE] Writing to ${filename} - DONE!`);
                return;
            }
            catch (e) {
                throw e;
            }
        });
    }
}
exports.default = createWriteToFile;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid3JpdGUtdG8tZmlsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50L2RhdGEtYWNjZXNzL3dyaXRlLXRvLWZpbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxTQUF3QixpQkFBaUIsQ0FBQyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUU7SUFDN0QsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQztJQUN0QyxTQUFlLFdBQVcsQ0FBQyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFOztZQUN4RCxJQUFJO2dCQUNGLE1BQU0sQ0FBQyxJQUFJLENBQ1QsMkNBQTJDLFFBQVEsV0FBVyxDQUMvRCxDQUFDO2dCQUNGLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQzNDLE1BQU0sU0FBUyxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztnQkFDdEMsTUFBTSxDQUFDLElBQUksQ0FDVCwyQ0FBMkMsUUFBUSxVQUFVLENBQzlELENBQUM7Z0JBQ0YsT0FBTzthQUNSO1lBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ1YsTUFBTSxDQUFDLENBQUM7YUFDVDtRQUNILENBQUM7S0FBQTtBQUNILENBQUM7QUFqQkQsb0NBaUJDIn0=