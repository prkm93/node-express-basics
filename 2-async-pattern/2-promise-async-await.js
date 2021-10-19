const {readFile, writeFile} = require('fs');
const util = require('util');

const readFilePromise = util.promisify(readFile);// This is the short version of writing promises.Here getText method.
const writeFilePromise = util.promisify(writeFile); 

// Using Promises
const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        })
    })
}

// getText('./content/first.txt')
// .then(result => console.log(result))
// .catch(err => console.log(err));
 

// Using async/await
const start = async() => {
    try {
    //  const first = await getText('./content/first.txt');
     const first = await readFilePromise('./content/first.txt', 'utf8');
    //  const second = await getText('./content/second.txt');
     const second = await readFilePromise('./content/second.txt', 'utf8');
     console.log(first);
     console.log(second);
     await writeFilePromise('./content/result-merged-first-second.txt', `This merged content: ${first} ${second}`);
    } catch (err) {
        console.log(err);
    }   
}


start();