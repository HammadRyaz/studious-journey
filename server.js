import http from "node:http";
import path from "node:path";
import fs from "node:fs/promises";
import { getContentType } from "./utils/getContentType.js";

console.clear();
const PORT = 8000;

const __dirname = import.meta.dirname;

const server = http.createServer(async (req, res) => {
    const pathToResourse = path.join(
        __dirname,
        "public",
        req.url === "/" ? "index.html" : req.url,
    );
    const ext = path.extname(pathToResourse);
    try {
        const content = await fs.readFile(pathToResourse);
        res.statusCode = 200;
        res.setHeader("Content-Type", getContentType(ext));
        res.end(content)
    } catch (err) {
        console.log(err)
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html')
        res.end(`
            <center>
            <h1> Page Not Found : 404 </h1>
            </center>
            `);
    }
});

server.listen(PORT, () => console.log("Server Listening on " + PORT));
