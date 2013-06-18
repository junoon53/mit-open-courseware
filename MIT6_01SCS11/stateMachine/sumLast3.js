function sumLast3(){
	var self = require('./stateMachine.js')();
	self.getNextValues = function(input,state) {
		if(input === "undefined") return {output:"undefined",nextState:state };
		return {nextState:[state[1],input],output:state[0]+state[1]+input};
	}; 
	return self;
};

module.exports = function(){
	return new self();
};
