// Importera "readFile" från "fs/promises" för att kunna läsa filer på ett asynkront sätt.
import { readFile } from "fs/promises";

// Exportera en funktion som skapar en "get"-funktion.
export default function createGet({ filePath }) {
  // Fryser (gör objektet oföränderligt) och returnerar objektet som har "get"-funktionen.
  return Object.freeze({ get });

  // Definition av den asynkrona "get"-funktionen.
  async function get() {
    try {
      // Försöker läsa filens innehåll som en textsträng (utf8).
      const data = await readFile(filePath, "utf8");

      // Parsar (omvandlar) textsträngen till ett JavaScript-objekt med JSON.parse().
      return JSON.parse(data);
    } catch (e) {
      // Om det uppstår ett fel (t.ex. om filen inte finns) returneras en tom lista.
      // Detta säkerställer att din applikation inte kraschar på grund av ett ohanterat undantag.
      return [];
    }
  }
}
