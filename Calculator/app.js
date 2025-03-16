const http = require('http')
const {requesthandler} = require('./handler')
const server = http.createServer(requesthandler)
PORT = 3000
server.listen(PORT,()=>{
    console.log(`server running on http://localhost:${PORT}`)
})