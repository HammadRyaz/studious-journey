import http from 'node:http'

const PORT = 8000;
const server = http.createServer((req, res) => {
    res.end("<h1> Server is Running , haha</h1>")

})

server.listen(PORT, () => console.log("Server Listening on " + PORT))