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

// default 64kb
// last buffer - remainder
// highWaterMark - control size
stream.on('data', (result) => {
    console.log(result);
})

stream.on('error', (err) => {
    console.log(err);
})