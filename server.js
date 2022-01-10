const http = require('http');
const fs = require('fs')

const port = 3000;

const server = http.createServer( (req, res) => 
{
    res.writeHead(200, {'Content-Type': 'text/html'})
    fs.readFile('index.html', (error, data) =>
    {
        if(error)
        {
            res.writeHead(404)
            res.write('Error: file not found')
        }
        else
        {
            res.write(data)
        }

        res.end()
    })
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