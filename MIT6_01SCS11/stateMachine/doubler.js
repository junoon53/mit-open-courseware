function doubler() {
	var self = require('./stateMachine.js')();
	var multiplier = require('./multiplier.js')();

	self.getNextValues = function(input,state) {

		return {nextState:multiplier.step([state,2]),output:multiplier.step([state,2])};
	};

	return self;

};

module.exports = function() {
	return new doubler();
};