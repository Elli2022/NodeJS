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
function createPost({ makeInputObj, checkDir, readFromFile, writeToFile, 
// access,
// mkdir,
// writeFile,
// readFile,
logger, }) {
    return Object.freeze({ post });
    function post({ params, filename, fileDirPath, fileDirName, filePath, errorMsgs, }) {
        return __awaiter(this, void 0, void 0, function* () {
            let user;
            try {
                logger.info(`[USE-CASE][POST] Inserting user to ${filename} - START!`);
                const userFactory = makeInputObj({ params });
                user = {
                    username: userFactory.username(),
                    password: userFactory.password(),
                    created: userFactory.created(),
                    modified: userFactory.modified(),
                };
                yield checkDir({ fileDirPath, fileDirName });
                const content = yield readFromFile({ filePath, filename });
                const duplicate = content.filter((el) => el.username == user.username);
                if (duplicate.length)
                    throw new Error(errorMsgs.EXISTING_USER);
                content.push(user);
                yield writeToFile({ content, filePath, filename });
                logger.info("[POST] [USE-CASE] Inserting Object process - DONE!");
                return user;
            }
            catch (e) {
                logger.info("[POST] [USE-CASE] Inserting Object process - DONE!");
                throw e;
            }
        });
    }
}
exports.default = createPost;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50L3VzZS1jYXNlcy9wb3N0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsU0FBd0IsVUFBVSxDQUFDLEVBQ2pDLFlBQVksRUFDWixRQUFRLEVBQ1IsWUFBWSxFQUNaLFdBQVc7QUFDWCxVQUFVO0FBQ1YsU0FBUztBQUNULGFBQWE7QUFDYixZQUFZO0FBQ1osTUFBTSxHQUNQO0lBQ0MsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUUvQixTQUFlLElBQUksQ0FBQyxFQUNsQixNQUFNLEVBQ04sUUFBUSxFQUNSLFdBQVcsRUFDWCxXQUFXLEVBQ1gsUUFBUSxFQUNSLFNBQVMsR0FDVjs7WUFDQyxJQUFJLElBQUksQ0FBQztZQUNULElBQUk7Z0JBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQyxzQ0FBc0MsUUFBUSxXQUFXLENBQUMsQ0FBQztnQkFDdkUsTUFBTSxXQUFXLEdBQUcsWUFBWSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztnQkFFN0MsSUFBSSxHQUFHO29CQUNMLFFBQVEsRUFBRSxXQUFXLENBQUMsUUFBUSxFQUFFO29CQUNoQyxRQUFRLEVBQUUsV0FBVyxDQUFDLFFBQVEsRUFBRTtvQkFDaEMsT0FBTyxFQUFFLFdBQVcsQ0FBQyxPQUFPLEVBQUU7b0JBQzlCLFFBQVEsRUFBRSxXQUFXLENBQUMsUUFBUSxFQUFFO2lCQUNqQyxDQUFDO2dCQUVGLE1BQU0sUUFBUSxDQUFDLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUM7Z0JBQzdDLE1BQU0sT0FBTyxHQUFHLE1BQU0sWUFBWSxDQUFDLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7Z0JBQzNELE1BQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUV2RSxJQUFJLFNBQVMsQ0FBQyxNQUFNO29CQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUMvRCxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNuQixNQUFNLFdBQVcsQ0FBQyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztnQkFDbkQsTUFBTSxDQUFDLElBQUksQ0FBQyxvREFBb0QsQ0FBQyxDQUFDO2dCQUNsRSxPQUFPLElBQUksQ0FBQzthQUNiO1lBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ1YsTUFBTSxDQUFDLElBQUksQ0FBQyxvREFBb0QsQ0FBQyxDQUFDO2dCQUNsRSxNQUFNLENBQUMsQ0FBQzthQUNUO1FBQ0gsQ0FBQztLQUFBO0FBQ0gsQ0FBQztBQS9DRCw2QkErQ0MifQ==