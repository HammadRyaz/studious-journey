import http from "node:http";
import { getDataFromDB } from "./database/db.js";
import sendResponseContent from "./utils/sendResponseContent.js";
import sendParmsData from "./utils/sendParmsData.js";
const PORT = 8000;

const server = http.createServer(async (req, res) => {
    const destinations = await getDataFromDB();
    if (req.url === "/api" && req.method === "GET") {
        sendResponseContent(res, 200, destinations);
    } else if (req.url.startsWith("/api/continent")) {
        const parts = req.url.split("/");
        const parms = parts[3];
        const data = sendParmsData(destinations, 'continent', parms)
        sendResponseContent(res, 200, data);
    }
    else if (req.url.startsWith("/api/country")) {
        const parts = req.url.split("/");
        const parms = parts[3];
        const data = sendParmsData(destinations, 'country', parms)
        sendResponseContent(res, 200, data);
    }
    else {
        sendResponseContent(res, 404, {
            error: "not found",
            message: "The requested route does not exist",
        });
    }
});
// server.listen(PORT, () => console.log(`Serve listening on port ${PORT}`))
server.listen(PORT);
