console.log('start');

setTimeout(() => {
    console.log("This is event loop.");
}, (2000));

console.log("end");