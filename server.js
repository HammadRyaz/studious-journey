import http from 'node:http'
import path from 'node:path'
// Scrim : Route and Path
console.clear()
const PORT = 8000;

// const __dirname = import.meta.dirname
// const pathPublic = `${__dirname}/public/images`
// console.log(pathPublic)

console.log(process.cwd())


const server = http.createServer((req, res) => {

    res.writeHead("200", { "Content-Type": "text/html" }, { "access-control-allow-method": "POST" })
    res.end()

})

server.listen(PORT, () => console.log("Server Listening on " + PORT))