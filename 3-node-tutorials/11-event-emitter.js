const EventEmitter = require('events');

const customEmitter = new EventEmitter();


customEmitter.on('response', (name, id) => {
    console.log(`data received ${name} and id:${id}`);
})

customEmitter.on('response', () => {
   console.log('some other logic');
})

customEmitter.emit('response', 'pradeep', 103); // Listening on event always comes before emitting the event

