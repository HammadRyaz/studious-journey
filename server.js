import http from 'node:http'
import path from 'node:path'
import fs from 'node:fs'
// Scrim : Aside FS Module
console.clear()
const PORT = 8000;

const __dirname = import.meta.dirname
// const pathPublic = `${__dirname}/public/images`
// console.log(pathPublic)

// console.log(process.cwd())

const absolutePath = path.join(__dirname, "public", "index.html")
// OUTPUT  : /home/user/GITHUB/HR/documentry-the-journey/public/index.html
const relativePath = path.join("public", "index.html")
// OUTPUT : public/index.html


const server = http.createServer((req, res) => {
    const resoursePath = path.join(__dirname, "public", "index.html")
    const content = fs.readFileSync(resoursePath, 'utf8')

    res.writeHead("200", { "Content-Type": "text/html" }, { "access-control-allow-method": "POST" })
    res.end(content)

})

server.listen(PORT, () => console.log("Server Listening on " + PORT))