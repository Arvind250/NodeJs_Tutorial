const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res)=>{
    console.log(req.url , req.method);
    if(req.url === '/'){
        res.setHeader('Content-Type','text/html')
        res.write('<html>')
        res.write('<body>')
        res.write(`<h1> Welcome to the page</h1>`)
        res.write('<form action="/submit-details" method= "POST">')
        res.write(`<form>
            <label for='name'>Enter your name :</label>
            <input type='text' id-'name' name='username' placeholder='Username'> <br/>
            <label for='male'>Male</label>
            <input type='radio' id='male' name='gender' value='male'></input>
            <label for='female'>female</label>
            <input type='radio' id='female' name='gender' value='female'></input> <br>
            <input type='submit' value='Submit'></input>
        </form>`)
        res.write('</body>')
        res.write('</html>');
        return res.end()
    }
    else if(req.url === '/submit-details' && req.method =='POST') {
            // fs.writeFileSync('New.txt','This is a new text file.')
            res.statusCode=302
            const body = []
            req.on('data',chunk=>{
                console.log(chunk)
                body.push(chunk)
            })
            req.on('end',()=>{
                const fullbody = Buffer.concat(body).toString()
                console.log(fullbody)
                const params = new URLSearchParams(fullbody)
                const bodyOject = {}
                for (const [key,value] of params.entries()){
                    bodyOject[key]=value
                }
                console.log(bodyOject)
                fs.writeFileSync("user.text",JSON.stringify(bodyOject))
            })
            res.setHeader('Location','/submitted')
        }
        else if (req.url==='/submitted') {
            res.write('<h1>Form Submitted</h1>')
        }
        res.end()
})
const PORT = 3001
server.listen(PORT,()=>{
    console.log(`server running at http://localhost:${PORT}`)
})