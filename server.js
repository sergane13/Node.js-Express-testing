const http = require('http');
const fs = require('fs')
const url = require('url')

//const menu = require('./testing');
const aur = require('./testing');

const port = 8080;

const server = http.createServer( (request, response) => 
{                 
    
    let pathname = url.parse(request.url).pathname;
    //console.log(pathname);

    response.writeHead(200);

    setTimeout(()=>
    {
        aur();
    }, 2000)

    if(pathname == "/") {
        html = fs.readFileSync("index.html", "utf8");
        response.write(html);
    } else if (pathname == "/testing.js") {
        script = fs.readFileSync("testing.js", "utf8");
        response.write(script);
    } else if (pathname == "/secondary.html"){
        html2 = fs.readFileSync("secondary.html", "utf8");
        response.write(html2);
    }

    response.end(); 
})


// listen for server on port 3000
server.listen(port, (error) => 
{
    if(error)
    {
        console.log(error);
    }else
    {
        console.log("Listening on port " + port);
    }
})