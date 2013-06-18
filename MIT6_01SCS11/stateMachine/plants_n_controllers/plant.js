function plant() {
	var deltaT = 0.1;
	var self = require('../stateMachine.js')();

	self.getNextValues = function(input,state) {
		if(input === "undefined") input = 0;
		var distance = state-deltaT*input;
		return {output:distance,nextState:distance};
	};

	return self;

};

module.exports = function(){
	return new plant();
};