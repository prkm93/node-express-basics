// GLOBALS - NO WINDOW !!!
// These are global variables in node

// __dirname -- path to current directory
// __filename -- file name
// require -- function to use modules(CommonJS)
// module -- info about current module (file)
// process -- info about env where program is being executed

/** Vanilla JS has window object in browser and bunch of methods in it 
 * but there is no window in nodejs
*/

console.log(__dirname);
console.log(__filename);

setInterval(() => {
    console.log("hello nodeJS");
}, 1000)