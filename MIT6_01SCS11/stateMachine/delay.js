function delay(){
	var self = require('./stateMachine.js')();

	self.getNextValues = function(input,state) {
		if(input === "undefined") return {nextState:state,output:state};
		return {nextState:input,output:state};
	}; 
	return self;
};


module.exports = function(){
	return new delay();
};
