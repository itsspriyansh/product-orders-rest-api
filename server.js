const http = require("http")
const app = require("./app")

const server = http.createServer(app)

const PORT = process.env.PORT || 3000
const IP = process.env.IP || "0.0.0.0"

server.listen(PORT, IP, ()=>{
    console.log("Server is listening on: http://%s:%d", IP, PORT)
})

