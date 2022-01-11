const http = require('http')
const fs = require('fs')

server = http.createServer( (req, res) => 
{
    if(req.method === "POST") {
        
        if(req.url === "/")
        {
            console.log(req);
        }

        req.on('data', function (data) {
            let buff = Buffer.from(data);
            console.log(buff.toString('utf8'));
        });   
    }
    
    
    fs.readFile('views/index.ejs', (error, data) => 
    {
        if(error)
        {
            res.writeHead(404)
        }
        else
        {
            res.writeHead(200);
            res.write(data);
        }   
    })

    // end response in 100 ms
    setTimeout( ()=>
    {
        res.end();
    }, 100)
    
})

//
server.listen(8080, (err) => 
{
    if(err)
    {
        console.log(err)
    }
    else
    {   
        console.log("listening on port " + 8080)
    }
})