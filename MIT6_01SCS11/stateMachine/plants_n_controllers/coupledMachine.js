function coupledMachine() {
	var plant = require('./plant.js')();
	var controller = require('./controller.js')();
	var cascade = require('../cascade.js')();
	var feedback = require('../feedback.js')();

	var self = require('../stateMachine.js')();

	self.init = function(startState) {
		plant.init(startState[0]);
		controller.init(startState[1]);
		cascade.init([controller,plant]);
		feedback.init(cascade);
		self._startState = feedback._startState;
	};

	self.start = function(){
		plant.start();
		controller.start();
		cascade.start();
		feedback.start();
		self._state = self._startState;
	};

	self.getNextValues = function(input,state){
		return feedback.getNextValues(input,state);
	};

	return self;


};

module.exports = function() {
	return new coupledMachine();
};