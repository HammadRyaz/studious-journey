
import http from "node:http"

const PORT = 8000;

const server = http.createServer((req, res) => {
    res.write("Server Start \n")
    console.log(" ")
    res.end("Server END", "utf8", () => console.log("bye bye"))
})

server.listen(PORT, () => console.log(`Serve listening on port ${PORT}`))