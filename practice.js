const http = require('http')
const PORT = 3002;
const server = http.createServer((req,res)=>{
    console.log(req.url ,req.method ,req.headers)
    if(req.url === '/'){
        res.write(`<h1>welcome</h1>
            <ul>
            <li><a href='/home'> home</a> </li>
            <li> <a href='/men'> men</a></li>
            <li><a href='/women'> woemn</a></li>
            <li> <a href='kids'> kids</a> </li>
            <li> <a href='cart'> cart </a> </li>
            </ul>`)
    } else if(req.url === '/home'){
        res.write(`<h1>home</h1>`)
    }else if(req.url === '/men'){
        res.write(`<h1>men</h1>`)
    }else if(req.url === '/women'){
        res.write(`<h1>women</h1>`)
    }else if(req.url === '/kids'){
        res.write(`<h1>kids</h1>`)
    }else if(req.url === '/cart'){
        res.write(`<h1>cart</h1>`)
    }
    return res.end()
})
server.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`)
})
