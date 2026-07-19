import http from 'node:http'
const PORT = 8000
console.log("Query Parameter")

const server = http.createServer((req, res) => {
    const urlObj = new URL(req.url, `http://${req.headers.host}`)
    const qeryObj = Object.fromEntries(urlObj.searchParams)
    console.log(qeryObj)
})

server.listen(PORT, console.log('Server listning on port 8000 '))