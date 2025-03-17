const http = require('http')
const server = http.createServer((req,res)=>{
    comsole.log(req)
})
PORT = 3000
server.listen(PORT,()=>[
    console.log(`Sever running on http://localhost:${PORT}`)
])