// Modules - Encapsulated code (only share mininum)
// CommonJS - every file is module (by default)

const {john, peter} = require('./2-names');
const sayHi = require('./3-utils');
require('./4-function');

sayHi('Pradeep');
sayHi(john);
sayHi(peter);