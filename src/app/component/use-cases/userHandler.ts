// Importerar väsentliga moduler för filhantering.
import * as path from "path";
import { writeFile, readFile } from "fs/promises";

// Sätter upp en konstant för var min users.json-fil ligger i projektstrukturen.
// Eftersom filen ligger i rotmappens "data"-mapp, justerar vi sökvägen därefter.
const userFilePath = path.join(__dirname, "..", "..", "data", "users.json");

// En funktion jag skapat för att läsa användarinformation från min JSON-fil.
export async function readUsers(): Promise<any[]> {
  try {
    // Läser innehållet i filen asynkront.
    const data = await readFile(userFilePath, "utf-8");
    // Returnerar filens innehåll som en array av användare.
    return JSON.parse(data);
  } catch (error) {
    // Om något går fel, skriv ut felet och returnera en tom array.
    console.error(
      "Oj! Något gick fel när jag försökte läsa användarna:",
      error
    );
    return [];
  }
}

// En funktion jag skapat för att lägga till en ny användare till min JSON-fil.
export async function addUser(user: any): Promise<void> {
  // Använder min readUsers-funktion för att hämta alla befintliga användare.
  const users = await readUsers();
  // Lägger till den nya användaren till listan.
  users.push(user);

  try {
    // Sparar den uppdaterade listan tillbaka till filen.
    await writeFile(userFilePath, JSON.stringify(users, null, 2), "utf-8");
  } catch (error) {
    // Om något går fel med att skriva till filen, skriv ut felet.
    console.error(
      "Åh nej! Jag kunde inte lägga till den nya användaren i filen:",
      error
    );
  }
}

// I framtiden kan jag lägga till fler funktioner här, t.ex. för att ta bort eller uppdatera användare.
