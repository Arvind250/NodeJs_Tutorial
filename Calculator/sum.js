const sumrequesthandler = (req,res)=>{
    console.log("In the sum handler ",req.url)
    const body = []
    req.on('data',chunk =>{
        body.push(chunk)
    })   
    req.on('end',()=>{
        const fullbody =Buffer.concat(body).toString()
        const params = new URLSearchParams(fullbody)
        const bodyObj = Object.fromEntries(params)
        console.log(bodyObj.num1 ,bodyObj.num2)
        const result = Number(bodyObj.num1) + Number(bodyObj.num2)
        console.log(result)
        res.setHeader('Content-Type','text/html')
        res.write(
            `<html>
                <body>
        <h3>
            the sum of the numbers is : ${result}
        </h3>
        </body>
        </html>`
    )
    return res.end()
    })
      
}
exports.sumrequesthandler = sumrequesthandler