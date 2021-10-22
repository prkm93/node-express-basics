// Streams

// Readable
// Writable
// Duplex( for both read/write )
// Transform

// Whenever required to handle streaming data,ex - continuous source or big file, it becomes very handy.

const { createReadStream} = require('fs');

const stream = createReadStream('./content/big-file.txt', { 
    highWaterMark: 90000, 
    encoding: 'utf8'
});
// const stream = createReadStream('./content/big-file.txt', { encoding: 'utf8'});

// default size of buffer is 64kb
// last buffer - remainder
// highWaterMark - control size
stream.on('data', (result) => {
    console.log(result);
})

stream.on('error', (err) => {
    console.log(err);
})

/** HTTP STREAM */

const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    // const text = fs.readFileSync('./content/big-file.txt', 'utf-8');
    // res.end(text);
    const fileStream = fs.createReadStream('./content/big-file.txt', 'utf8');
    
    fileStream.on('open', () => {
        fileStream.pipe(res);
    })

    fileStream.on('error', (err) => {
        res.end(err);
    })
}).listen(3000); 