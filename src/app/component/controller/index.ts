// Importera nödvändiga moduler och funktioner
import { logger } from "../../libs/logger"; // Logger hjälper oss att logga information eller fel.
import { post } from "../use-cases"; // Den här "post"-funktionen kommer från use-cases och handlar om hur data ska behandlas.
const baseUrl = "/api/v1"; // Detta är basvägen för din API.

// En enkel GET-funktion som svarar med "Hello, world!" när någon besöker den.
const get = (req, res) => res.json({ data: "Hello, world!" });

// En POST-route-handlare. Den här funktionen kallas när någon skickar POST-data till servern.
const postEP = async (req, res) => {
  // Notera "async" här
  try {
    // Försök att hämta resultatet genom att kalla på post-funktionen med data från förfrågan.
    const results = await post({ params: req.body }); // Notera "await" här
    // Skicka tillbaka resultatet som svar.
    res.json({ data: results });
  } catch (err) {
    // Om något går fel, logga felet och skicka tillbaka ett felmeddelande till klienten.
    logger.error(err);
    res.status(500).json({ error: "Ett internt serverfel har inträffat" });
  }
};

// Här definieras rutterna (vägarna) för din server.
const routes = [
  { path: `${baseUrl}/`, method: "get", component: get },
  { path: `${baseUrl}`, method: "post", component: postEP },
];

// Exportera routes så att andra delar av din kod kan använda dem.
export { routes };
