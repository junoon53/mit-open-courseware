function multiplex() {
	var self = require('./switch.js')();
	self.getNextValues = function(input){
		var output;
				var nextState = [];
				
				if(self._condition(input)) 
					output = self_machines[0].step(input);
				else
					output = self_machines[1].step(input);

				for(var i=0;i<self._machines.length;i++) {
					nextState.push(self._machines[i]._state);
				};

				return {output:output,nextState:nextState};
	};

	return self;
};

module.exports = function() {
	return new multiplex();
};