function cascade(){

	var self = require('./stateMachine.js')();

	self.init = function(stateMachines){
		self._machines = stateMachines;
		self._startState = [];
		for(var i=0;i<stateMachines.length;i++) {
			self._startState.push(stateMachines[i]._startState);
		}
	};
	self.getNextValues = function(input,state) {
		var output = input;
		var nextState = [];
		for(var i=0;i<self._machines.length;i++) {
		    output = self._machines[i].step(output);	
		}

		for(var i=0;i<self._machines.length;i++) {
			nextState.push(self._machines[i]._state);
		}

		return {output:output,nextState:nextState};
	}; 
	return self;
}; 

module.exports = function(){
	return new cascade();
};
