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
function createPost({ access, mkdir, writeFile, readFile, logger, }) {
    return Object.freeze({ post });
    function post({ params, filename, fileDirPath, fileDirName, filePath, errorMsgs, }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (params.username === undefined || params.password === undefined)
                    throw new Error(errorMsgs.NO_DATA);
                logger.info(`[USE-CASE][POST] Inserting user to ${filename} - START!`);
                yield access(filePath);
                logger.info(`[USE-CASE][POST] Reading file ${filename} - START!`);
                const fileContents = yield readFile(filePath, { encoding: "utf8" });
                const users = JSON.parse(fileContents);
                logger.info(`[USE-CASE][POST] Reading file ${filename} - DONE!`);
                logger.info(`[USE-CASE][POST] Validating params  - START!`);
                const existingUser = users.filter((user) => user.username === params.username);
                if (existingUser.length)
                    throw new Error(errorMsgs.EXISTING_USER);
                logger.info(`[USE-CASE][POST] Validating params  - DONE!`);
                logger.info(`[USE-CASE][POST] Writing to file ${filename}  - START!`);
                users.push(params);
                yield writeFile(filePath, JSON.stringify(users));
                logger.info(`[USE-CASE][POST] Writing to file ${filename}  - DONE!`);
                logger.info(`[USE-CASE][POST] Inserting user to ${filename} - DONE!`);
                return params;
            }
            catch (e) {
                if (e.message === errorMsgs.NO_DATA ||
                    e.message === errorMsgs.EXISTING_USER) {
                    throw e.message;
                }
                logger.info(`[USE-CASE][POST] Creating directory: ${fileDirName}  - START!`);
                yield mkdir(fileDirPath);
                logger.info(`[USE-CASE][POST] Creating directory: ${fileDirName} - DONE!`);
                logger.info(`[USE-CASE][POST] Creating and writing to file ${filename}  - START!`);
                yield writeFile(filePath, JSON.stringify([params]));
                logger.info(`[USE-CASE][POST] Creating and writing to file ${filename}  - DONE!`);
                logger.info(`[USE-CASE][POST] Inserting user to ${filename} - DONE!`);
                return params;
            }
        });
    }
}
exports.default = createPost;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50L3VzZS1jYXNlcy9wb3N0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsU0FBd0IsVUFBVSxDQUFDLEVBQ2pDLE1BQU0sRUFDTixLQUFLLEVBQ0wsU0FBUyxFQUNULFFBQVEsRUFDUixNQUFNLEdBQ1A7SUFDQyxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBRS9CLFNBQWUsSUFBSSxDQUFDLEVBQ2xCLE1BQU0sRUFDTixRQUFRLEVBQ1IsV0FBVyxFQUNYLFdBQVcsRUFDWCxRQUFRLEVBQ1IsU0FBUyxHQUNWOztZQUNDLElBQUk7Z0JBQ0YsSUFBSSxNQUFNLENBQUMsUUFBUSxLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsUUFBUSxLQUFLLFNBQVM7b0JBQ2hFLE1BQU0sSUFBSSxLQUFLLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUVyQyxNQUFNLENBQUMsSUFBSSxDQUFDLHNDQUFzQyxRQUFRLFdBQVcsQ0FBQyxDQUFDO2dCQUN2RSxNQUFNLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFFdkIsTUFBTSxDQUFDLElBQUksQ0FBQyxpQ0FBaUMsUUFBUSxXQUFXLENBQUMsQ0FBQztnQkFDbEUsTUFBTSxZQUFZLEdBQUcsTUFBTSxRQUFRLENBQUMsUUFBUSxFQUFFLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7Z0JBQ3BFLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQ3ZDLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUNBQWlDLFFBQVEsVUFBVSxDQUFDLENBQUM7Z0JBRWpFLE1BQU0sQ0FBQyxJQUFJLENBQUMsOENBQThDLENBQUMsQ0FBQztnQkFFNUQsTUFBTSxZQUFZLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FDL0IsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLEtBQUssTUFBTSxDQUFDLFFBQVEsQ0FDNUMsQ0FBQztnQkFDRixJQUFJLFlBQVksQ0FBQyxNQUFNO29CQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUNsRSxNQUFNLENBQUMsSUFBSSxDQUFDLDZDQUE2QyxDQUFDLENBQUM7Z0JBRTNELE1BQU0sQ0FBQyxJQUFJLENBQUMsb0NBQW9DLFFBQVEsWUFBWSxDQUFDLENBQUM7Z0JBQ3RFLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ25CLE1BQU0sU0FBUyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ2pELE1BQU0sQ0FBQyxJQUFJLENBQUMsb0NBQW9DLFFBQVEsV0FBVyxDQUFDLENBQUM7Z0JBRXJFLE1BQU0sQ0FBQyxJQUFJLENBQUMsc0NBQXNDLFFBQVEsVUFBVSxDQUFDLENBQUM7Z0JBQ3RFLE9BQU8sTUFBTSxDQUFDO2FBQ2Y7WUFBQyxPQUFPLENBQUMsRUFBRTtnQkFDVixJQUNFLENBQUMsQ0FBQyxPQUFPLEtBQUssU0FBUyxDQUFDLE9BQU87b0JBQy9CLENBQUMsQ0FBQyxPQUFPLEtBQUssU0FBUyxDQUFDLGFBQWEsRUFDckM7b0JBQ0EsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDO2lCQUNqQjtnQkFFRCxNQUFNLENBQUMsSUFBSSxDQUNULHdDQUF3QyxXQUFXLFlBQVksQ0FDaEUsQ0FBQztnQkFDRixNQUFNLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDekIsTUFBTSxDQUFDLElBQUksQ0FDVCx3Q0FBd0MsV0FBVyxVQUFVLENBQzlELENBQUM7Z0JBRUYsTUFBTSxDQUFDLElBQUksQ0FDVCxpREFBaUQsUUFBUSxZQUFZLENBQ3RFLENBQUM7Z0JBQ0YsTUFBTSxTQUFTLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BELE1BQU0sQ0FBQyxJQUFJLENBQ1QsaURBQWlELFFBQVEsV0FBVyxDQUNyRSxDQUFDO2dCQUVGLE1BQU0sQ0FBQyxJQUFJLENBQUMsc0NBQXNDLFFBQVEsVUFBVSxDQUFDLENBQUM7Z0JBRXRFLE9BQU8sTUFBTSxDQUFDO2FBQ2Y7UUFDSCxDQUFDO0tBQUE7QUFDSCxDQUFDO0FBekVELDZCQXlFQyJ9