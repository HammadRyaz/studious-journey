import http from 'node:http'
// Scrim : Route and Path

const PORT = 8000;
const dir  = import.meta.dirname
console.log(dir)
const server = http.createServer((req, res) => {
    
    res.writeHead("200", { "Content-Type": "text/html" }, { "access-control-allow-method": "POST" })
    res.end()

})

server.listen(PORT, () => console.log("Server Listening on " + PORT))