const http =require('http')
const server = http.createServer((req,res)=>{
    console.log(req.url , req.method ,req.headers);
    if(req.url === '/'){
    res.setHeader('Content-Type','text/html')
    res.write('<html>')
    res.write('<body>')
    res.write(`<h1> Welcome to the page</h1>`)
    res.write('</body>')
    res.write('</html>');
    return res.end()
    }
    else if(req.url === '/home'){
    res.setHeader('Content-Type','text/html')
    res.write('<html>')
    res.write('<body>')
    res.write('<h1>home</h1>')
    res.write('</body>')
    res.write('</html>');
    return res.end();
    }else if (req.url === '/products'){
    res.setHeader('Content-Type','text/html')
    res.write('<html>')
    res.write('<body>')
    res.write('<h1>products</h1>')
    res.write('</body>')
    res.write('</html>');
    return res.end();
    }
    else if (req.url === '/contact'){
    res.setHeader('Content-Type','text/html')
    res.write('<html>')
    res.write('<body>')
    res.write('<h1>contact</h1>')
    res.write('</body>')
    res.write('</html>');
    return res.end();
    }
    res.setHeader('Content-Type','text/html')
    res.write('<html>')
    res.write('<body>')
    res.write('<h1>ERROR</h1>')
    res.write('</body>')
    res.write('</html>');
    return res.end();
})
const PORT = 3000
server.listen(PORT,()=>{
    console.log(`server running at http://localhost:${PORT}`)
})