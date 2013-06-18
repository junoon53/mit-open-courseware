var increment1 =  require('./stateMachine/increment.js')();
var increment2 =  require('./stateMachine/increment.js')();
var counter1 = require('./stateMachine/counter.js')();
var counter2 = require('./stateMachine/counter.js')();
var fibonacci1 = require('./stateMachine/fibonacci.js')();
var doubler = require('./stateMachine/doubler.js')();
var squarer = require('./stateMachine/squarer.js')();
var feedbackAdd = require('./stateMachine/feedbackAdd.js')();
var delay1 = require('./stateMachine/delay.js')();
var factorial = require('./stateMachine/factorial.js')();
var consumeFiveValues = require('./stateMachine/consumeFiveValues.js')();

increment1.init(1);
increment1.start();
increment2.init(0);
increment2.start();
counter1.init(0,1);
counter1.start();
counter2.init(1,2);
counter2.start();
fibonacci1.init();
fibonacci1.start();
doubler.init(1);
doubler.start();
squarer.init(2);
squarer.start();
delay1.init(0);
delay1.start();
feedbackAdd.init(delay1);
feedbackAdd.start();
factorial.init(1);
factorial.start();
consumeFiveValues.init(0,0);
consumeFiveValues.start();

console.log("inc1");
console.log(increment1.step(1));
console.log(increment1.step(2));
console.log(increment1.step(3));
console.log(increment1.step(1));
console.log("inc2");
console.log(increment2.step(1));
console.log(increment2.step(2));
console.log(increment2.step(3));
console.log(increment2.step(1));
console.log("counter1");
console.log(counter1.step());
console.log(counter1.step());
console.log(counter1.step());
console.log("counter2");
console.log(counter2.step());
console.log(counter2.step());
console.log(counter2.step());
console.log("fibonacci1");
console.log(fibonacci1.step());
console.log(fibonacci1.step());
console.log(fibonacci1.step());
console.log(fibonacci1.step());
console.log(fibonacci1.step());
console.log(fibonacci1.step());
console.log(fibonacci1.step());
console.log(fibonacci1.step());
console.log("doubler");
console.log(doubler.step());
console.log(doubler.step());
console.log(doubler.step());
console.log(doubler.step());
console.log("squarer");
console.log(squarer.step());
console.log(squarer.step());
console.log(squarer.step());
console.log(squarer.step());
console.log("feedbackAdd");
console.log(feedbackAdd.step(1));
console.log(feedbackAdd.step(1));
console.log(feedbackAdd.step(3));
console.log(feedbackAdd.step(4));
console.log(feedbackAdd.step(4));
console.log(feedbackAdd.step(0));
console.log("factorial");
console.log(factorial.step(1));
console.log(factorial.step(1));
console.log(factorial.step(1));
console.log(factorial.step(1));
console.log(factorial.step(1));
console.log(factorial.step(1));
console.log(factorial.step(1));
console.log("consumeFiveValues");
console.log(consumeFiveValues.transduce([1,2,3,4,5,6,7,8,09,10]));