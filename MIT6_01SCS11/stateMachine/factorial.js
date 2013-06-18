function factorial() {
var self = require('./stateMachine.js')();
var feedbackMultiply = require('./feedbackMultiply.js')();
var delay1 = require('./delay.js')();
var counter = require('./counter.js')();
var cascade = require('./cascade.js')();

self.init = function(){
     delay1.init(1);
     feedbackMultiply.init(delay1);
     counter.init(1,1);
     cascade.init([counter,feedbackMultiply]);
     self._startState = cascade._startState;	
};

self.start = function() {
     delay1.start();
     feedbackMultiply.start();
     counter.start();
     cascade.start();
     self._state = self._startState;
};

self.getNextValues = function(input,state) {
     return cascade.getNextValues(input,state);
};

return self;

};

module.exports = function() {
	return new factorial();
}
