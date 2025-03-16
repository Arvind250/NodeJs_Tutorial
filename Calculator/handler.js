const {sumrequesthandler} = require('./sum')
const requesthandler = (req,res)=>{
    if(req.url == '/'){
        res.setHeader('Content-Type','text/html')
        res.write(
            `<html>
                <body>
                    <h1> welcome to the calculator project</h1>
                    <a href ='/calculator'>calculator</a>
                </body>
            </html>`
        )
        return res.end()
    }
    else if (req.url === '/calculator'){
        res.setHeader('Content-Type','text/html')
        res.write(`<html>
            <body>
            <form action='/calculate-result' method='POST'>
            <input type = 'text' id ='num1' name='num1' placeholder='Enter number 1 : '></input><br>
            <input type = 'text' id ='num2' name='num2' placeholder='Enter number 2 : '></input><br>
            <input type='submit' value='SUM'></input>
        </form>
        </body>
            </html>`)
        return res.end()
    }
    else if(req.url == '/calculate-result'){
       return sumrequesthandler(req,res)
    }
    return res.end()
}
exports.requesthandler = requesthandler;