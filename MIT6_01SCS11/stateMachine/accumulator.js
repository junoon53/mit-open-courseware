function accumulator(){
	var self = require('./stateMachine.js')();
	self.getNextValues = function(input,state) {
		if(input === "undefined") {
			return {nextState:state,output:"undefined"};
		} else {
			return {nextState:state+input,output:state+input};	
		};
	
	}; 
	return self;
};


module.exports = function() {
	return new accumulator();
};	
