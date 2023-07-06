const http = require('http');

const server = http.createServer((req, res) =>
{
    res.end("Akash dutta");
})

server.listen(4000)