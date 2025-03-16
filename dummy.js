const http = require('http')
const server =http.createServer((req,res)=>{
    console.log(req.headers)
    if(req.url=='/'){
        res.write(
        `<html>
            <body>
                <p>
                    Welcome to this page
                </p>
                
            </body>
        </html>`
        )
        res.end()
    }
})
PORT = 3000
server.listen(PORT,()=>{
    console.log(`server running on http://localhost:${PORT}`)
})