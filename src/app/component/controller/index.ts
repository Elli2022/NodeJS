import { logger } from "../../libs/logger";
import { post } from "../use-cases";
import createGet from "../use-cases/get";
import { filePath } from "../use-cases";

// Skapa en instans av get-funktionen.
const { get: getUserData } = createGet({ filePath });

const baseUrl = "/api/v1";

const getEP = async (req, res) => {
  try {
    const users = await getUserData();
    res.json({ data: users });
  } catch (err) {
    logger.error(err);
    res.status(500).json({ error: "Ett internt serverfel har inträffat" });
  }
};

const postEP = async (req, res) => {
  try {
    const results = await post({ params: req.body });
    res.json({ data: results });
  } catch (err) {
    logger.error(err);
    res.status(500).json({ error: "Ett internt serverfel har inträffat" });
  }
};

const routes = [
  { path: `${baseUrl}/`, method: "get", component: getEP },
  { path: `${baseUrl}`, method: "post", component: postEP },
];

export { routes };
