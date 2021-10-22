const http = require('http');

const server = http.createServer((req, res) => {
    console.log('user hit the server');
    res.writeHead(200, {'content-type': 'text/html'}); // passing text/plain renders as plain text
    res.write('<h1>Home Page</h1>');
    res.end();
});

server.listen(3000);