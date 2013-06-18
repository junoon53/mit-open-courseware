function feedback(){
	var self = require('./stateMachine.js')();

	self.init = function(machine) {
		self._machine = machine;
		self._startState = machine._startState;
	};	 

	self.getNextValues = function(input,state) {
		var output1 = self._machine.getNextValues("undefined",state)
		var output2 = self._machine.getNextValues(output1.output,state);
		return {output:output1.output,nextState:output2.nextState};		
	};

	return self; 
};

module.exports = function(){
	return new feedback();
}
