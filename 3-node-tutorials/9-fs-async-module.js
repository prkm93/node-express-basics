console.log('start');
const {readFile, writeFile} = require('fs');

readFile('./content/first.txt','utf8' , (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = data;
    
    readFile('./content/second.txt', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            return;
        }    
        const second = data;

        writeFile('./content/result-async.txt', 
        `Here is the result: ${first} ${second}`, 
        (err, result) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log('done with this task');
        })
    })
})

console.log('end of execution');

// This is asynchronous writing of file. The moment code execution starts and control comes within callback function, node offloads the callback task and keeps continuing the code execution without blocking the further code.