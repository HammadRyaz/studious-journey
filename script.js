
import http from "node:http"
import { getDataFromDB } from "./database/db.js"
const PORT = 8000;

const server = http.createServer(async (req, res) => {
    const destinations = await getDataFromDB()
    if (req.url === "/api" && req.method === "GET") {
        res.setHeader('Content-Type', 'application/json')
        res.statusCode = 200;
        res.end(JSON.stringify(destinations))
    }
    else if (req.url.startsWith('/api/continent')) {
        const parts = req.url.split('/')
        const continent = parts[3]
        const continentItem = destinations.filter((data => data.continent.toLowerCase() === continent.toLowerCase()))
        res.setHeader('Content-Type', 'application/json')
        res.statusCode = 200;
        res.end(JSON.stringify(continentItem))
    }
    else {
        res.setHeader('Content-Type', 'application/json')
        res.statusCode = 404;
        res.end(JSON.stringify({
            error: "not found",
            message: "The requested route does not exist"
        }))
    }
})

// server.listen(PORT, () => console.log(`Serve listening on port ${PORT}`))
server.listen(PORT)