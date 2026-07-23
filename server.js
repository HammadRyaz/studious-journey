import http from 'node:http'
import path from 'node:path'
import fs from 'node:fs'
// Scrim : Aside FS Module
console.clear()
const PORT = 8000;

const __dirname = import.meta.dirname

const server = http.createServer((req, res) => {
    const pathToResourse = path.join(__dirname, 'public', 'index.html')
    fs.readFile(pathToResourse, 'utf8', (err, content) => {
        if (err) {
            console.log(err)
            return
        } else {
            res.writeHead(200, {'Content-Type':'text/html'})
            res.end(content)
        }
    })
})

server.listen(PORT, () => console.log("Server Listening on " + PORT))