const http = require('http');
const port = process.env.port || 3000;

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our home page')
    }
    
    if (req.url === '/about') {
         res.end('Here is our short history')
    } 
    res.end(`<h1>Ooops</h1>
            <p>The page isn't found</p>
            <a href="/">Go back to home</a>`);
})

server.listen(port,() => {
    console.log(`server is listening on port ${port}`)
})