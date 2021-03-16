/* benchmark.js */
const b = require('benny');
const mymodule = require('../factorial');

b.suite(
  'Example',
 
  b.add('Calculate factorial', () => {
    mymodule.factorial(3000)
  }),
 
 
  b.cycle(),
  b.complete(),
  b.save({ file: 'reduce', version: '1.0.0' }),
  b.save({ file: 'reduce', format: 'chart.html' }),
)