console.log('start');
const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

console.log(first);
console.log(second);

writeFileSync(
    './content/result-sync.txt', 
    `Here is the result : ${first} ${second}`,
    {flag: 'a'} // the flag appends the content of file
); //merges content of 2 files

console.log('done with writing file');
console.log('end');

/** This is synchronous execution of files */