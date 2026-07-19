
import http from "node:http"

const PORT = 8000;

const server = http.createServer((req, res) => {
    console.log(req.url)
    res.end("Server END", "utf8", () => console.log("Server End"))
})

// server.listen(PORT, () => console.log(`Serve listening on port ${PORT}`))
server.listen(PORT)