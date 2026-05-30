// Importera nödvändiga moduler och funktioner
import { logger } from "../../libs/logger"; // Logger hjälper oss att logga information eller fel.
import { post } from "../use-cases"; // Den här "post"-funktionen kommer från use-cases och handlar om hur data ska behandlas.
const baseUrl = "/api/v1"; // Detta är basvägen för din API.

// En enkel GET-funktion som svarar med "Hello, world!" när någon besöker den.
const get = (req, res) => res.json({ data: "Hello, world!" });

// En POST-route-handlare. Den här funktionen kallas när någon skickar POST-data till servern.
// Den använder "post"-funktionen från use-cases för att hantera den mottagna datan.
const postEP = (req, res) => {
  try {
    // Försök att hämta resultatet genom att kalla på post-funktionen med data från förfrågan.
    const results = post({ params: req.body });
    // Skicka tillbaka resultatet som svar.
    res.json({ data: results });
  } catch (err) {
    // Om något går fel, logga felet.
    logger.error(err);
  }
};

// Här definieras rutterna (vägarna) för din server.
// Varje objekt representerar en route och innehåller information om vilken HTTP-metod som ska användas, vilken väg den ska lyssna på och vilken funktion som ska kallas när den vägen nås.
const routes = [
  { path: `${baseUrl}/`, method: "get", component: get }, // När någon besöker "/api/v1/" med GET-metoden, kör "get"-funktionen.
  { path: `${baseUrl}`, method: "post", component: postEP }, // När någon skickar data till "/api/v1" med POST-metoden, kör "postEP"-funktionen.
];

// Exportera routes så att andra delar av din kod kan använda dem.
export { routes };
