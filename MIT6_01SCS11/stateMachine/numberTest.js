function numberTest(){
	var self = require('./stateMachine.js')();

	self.legalInputs = ['x*2', 'x+1', 'x-1', 'x^2', '-x'];

	self.init = function(initValue, goal) {
		self._startState = initValue;
		self._goal = goal;
	}

	self.nextState = function(state, input){
		if (input == 'x*2')
			return state*2;
		else if (input == 'x+1')
			return state+1;
		else if (input == 'x-1')
			return state-1;
		else if (input == 'x^2')
			return Math.pow(state,2);
		else if( input == '-x')
			return -state;
	};

	self.getNextValues = function(state, input){
		var nextState = self.nextState(state, input);
		return {nextState:nextState, output:nextState};
	};

	self.done = function(state){
		return state === self._goal;
	};

	return self;


};


module.exports = function() {
	return new numberTest();
};	
