var coupledMachine = require('./coupledMachine.js')();

coupledMachine.init([5,2]);
coupledMachine.start();

for(var i=0;i<30;i++)
console.log(coupledMachine.step());