function countUpNDown(){
	var self = require('./stateMachine.js')();

	self.getNextValues = function(input,state) {
		if(input === "undefined") return {nextState:state,output:"undefined"};
		if(input == 'u') {
		    	return {nextState:state+1,output:state+1};
		} else {
			return {nextState:state-1,output:state-1};
		}
	};
	return self; 
};

module.exports = function(){
	return new countUpNDown();
};
