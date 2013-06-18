function feedbackAdd() {
	var self = require('./stateMachine.js')();
	var adder = require('./adder.js')();
	var cascade = require('./cascade.js')();
	var feedback2 = require('./feedback2.js')();

	self.init = function(machine) {
		cascade.init([adder,machine]);
		feedback2.init(cascade);
		self._startState = feedback2._startState;
	};

	self.start = function() {
		cascade.start();
		feedback2.start();
		self._state = self._startState;
	};	 

	self.getNextValues = function(input,state) {
		return feedback2.getNextValues(input,state);		
	};
	return self;
};

module.exports = function(){
	return new feedbackAdd();
};
