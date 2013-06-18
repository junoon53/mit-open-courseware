function doubler() {
	var self = require('./stateMachine.js')();
	var multiplier = require('./multiplier.js')();

	self.getNextValues = function(input,state) {

		return {nextState:multiplier.step([state,state]),output:multiplier.step([state,state])};
	};

	return self;

};

module.exports = function() {
	return new doubler();
};