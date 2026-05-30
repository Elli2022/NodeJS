"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.addUser = exports.readUsers = void 0;
// Importerar väsentliga moduler för filhantering.
const path = __importStar(require("path"));
const promises_1 = require("fs/promises");
// Sätter upp en konstant för var min users.json-fil ligger i projektstrukturen.
// Eftersom filen ligger i rotmappens "data"-mapp, justerar vi sökvägen därefter.
const userFilePath = path.join(__dirname, "..", "..", "data", "users.json");
// En funktion jag skapat för att läsa användarinformation från min JSON-fil.
function readUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Läser innehållet i filen asynkront.
            const data = yield (0, promises_1.readFile)(userFilePath, "utf-8");
            // Returnerar filens innehåll som en array av användare.
            return JSON.parse(data);
        }
        catch (error) {
            // Om något går fel, skriv ut felet och returnera en tom array.
            console.error("Oj! Något gick fel när jag försökte läsa användarna:", error);
            return [];
        }
    });
}
exports.readUsers = readUsers;
// En funktion jag skapat för att lägga till en ny användare till min JSON-fil.
function addUser(user) {
    return __awaiter(this, void 0, void 0, function* () {
        // Använder min readUsers-funktion för att hämta alla befintliga användare.
        const users = yield readUsers();
        // Lägger till den nya användaren till listan.
        users.push(user);
        try {
            // Sparar den uppdaterade listan tillbaka till filen.
            yield (0, promises_1.writeFile)(userFilePath, JSON.stringify(users, null, 2), "utf-8");
        }
        catch (error) {
            // Om något går fel med att skriva till filen, skriv ut felet.
            console.error("Åh nej! Jag kunde inte lägga till den nya användaren i filen:", error);
        }
    });
}
exports.addUser = addUser;
// I framtiden kan jag lägga till fler funktioner här, t.ex. för att ta bort eller uppdatera användare.
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlckhhbmRsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBwL2NvbXBvbmVudC91c2UtY2FzZXMvdXNlckhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxrREFBa0Q7QUFDbEQsMkNBQTZCO0FBQzdCLDBDQUFrRDtBQUVsRCxnRkFBZ0Y7QUFDaEYsaUZBQWlGO0FBQ2pGLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFlBQVksQ0FBQyxDQUFDO0FBRTVFLDZFQUE2RTtBQUM3RSxTQUFzQixTQUFTOztRQUM3QixJQUFJO1lBQ0Ysc0NBQXNDO1lBQ3RDLE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBQSxtQkFBUSxFQUFDLFlBQVksRUFBRSxPQUFPLENBQUMsQ0FBQztZQUNuRCx3REFBd0Q7WUFDeEQsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3pCO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCwrREFBK0Q7WUFDL0QsT0FBTyxDQUFDLEtBQUssQ0FDWCxzREFBc0QsRUFDdEQsS0FBSyxDQUNOLENBQUM7WUFDRixPQUFPLEVBQUUsQ0FBQztTQUNYO0lBQ0gsQ0FBQztDQUFBO0FBZEQsOEJBY0M7QUFFRCwrRUFBK0U7QUFDL0UsU0FBc0IsT0FBTyxDQUFDLElBQVM7O1FBQ3JDLDJFQUEyRTtRQUMzRSxNQUFNLEtBQUssR0FBRyxNQUFNLFNBQVMsRUFBRSxDQUFDO1FBQ2hDLDhDQUE4QztRQUM5QyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWpCLElBQUk7WUFDRixxREFBcUQ7WUFDckQsTUFBTSxJQUFBLG9CQUFTLEVBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztTQUN4RTtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2QsOERBQThEO1lBQzlELE9BQU8sQ0FBQyxLQUFLLENBQ1gsK0RBQStELEVBQy9ELEtBQUssQ0FDTixDQUFDO1NBQ0g7SUFDSCxDQUFDO0NBQUE7QUFoQkQsMEJBZ0JDO0FBRUQsdUdBQXVHIn0=