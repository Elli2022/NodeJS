import { readFile } from "fs/promises";

// Exportera en funktion som skapar en "post"-funktion.
// Funktionen tar in ett objekt med en "logger" som argument (även om "logger" inte används i detta exempel).
export default function createPost({ logger, access, mkdir, writeFile }) {
  // Returnera ett objekt som har en "post"-funktion.
  return Object.freeze({ post });

  async function post({ params, fileDir, filePath }) {
    try {
      await access(filePath);
      // Om filen finns, läs innehållet
      const data = await readFile(filePath, "utf8");
      const users = JSON.parse(data);

      // Kontrollera om användaren redan finns
      const userExists = users.some(
        (user) => user.username === params.username
      );

      if (userExists) {
        throw new Error("Användaren finns redan!");
      }

      // Lägg till den nya användaren
      users.push(params);
      await writeFile(filePath, JSON.stringify(users, null, 2));

      return params;
    } catch (e) {
      if (e.message === "Användaren finns redan!") {
        throw e; // Om användaren redan finns, kasta felmeddelandet
      }

      // Om filen inte finns, skapa den med den nya användaren i en lista
      const users = [params];
      await mkdir(fileDir, { recursive: true }).catch(() => {}); // Skapa mappar rekursivt, men ignorera fel om mappen redan finns
      await writeFile(filePath, JSON.stringify(users, null, 2));

      return params;
    }
  }
}
