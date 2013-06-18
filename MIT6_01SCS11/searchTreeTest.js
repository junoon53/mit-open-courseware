var stateMachineSearch = require('./search-trees/search.js')();
var numberTest1 =  require('./stateMachine/numberTest.js')();


numberTest1.init(1,10);
numberTest1.start();

var path =  stateMachineSearch(numberTest1, null,null,false,1000);

console.log(path);