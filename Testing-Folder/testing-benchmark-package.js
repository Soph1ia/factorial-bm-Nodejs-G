const Benchmark = require('benchmark');

const myModule = require('../factorial');

const suit = new Benchmark.Suite;

suit.add('factorial_2000', function() {
    myModule.factorial(2000)
})
.on('cycle', function(event){
    console.log(String(event.target))
})
.on('complete', function() {
    console.log('Fastest is' + this.filter('fastest').map('name'))
})
.run({ 'async': false}); 