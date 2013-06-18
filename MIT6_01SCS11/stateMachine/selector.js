function selector(){
	var self = require('./stateMachine.js')();
	self.getNextValues = function(input) {
		if(input === "undefined") return {output:"undefined:"};
		return {output:input[self._startState]};
	}; 
	return self;
};

module.exports = function(){
	return new selector();
};
