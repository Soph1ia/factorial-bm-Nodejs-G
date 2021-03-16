const benchmark = require('nodemark');
const myModule = require('../factorial');

const result = benchmark(myModule.factorial(5));
console.log(result);

