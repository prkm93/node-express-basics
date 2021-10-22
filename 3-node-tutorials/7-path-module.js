const path = require('path');

// console.log(path.sep); // returns platform specific separator

// console.log(path.join); // joins sequence of path segments using platform specific separator

const filePath = path.join('/content', 'subfolder', 'test.txt');
// console.log(filePath); // \content\subfolder\test.txt

const base = path.basename(filePath); // returns filename
// console.log(base); //test.txt

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt'); // returns abosolute path
console.log(absolute); //F:\Career\NodeJS\node express basics\content\subfolder\test.txt