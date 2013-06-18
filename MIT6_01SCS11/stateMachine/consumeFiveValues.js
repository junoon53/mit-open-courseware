function consumeFiveValues(){
	var self = require('./stateMachine.js')();

	self.init = function(count,total){
		this._startState = [count,total];
	}


	self.getNextValues = function(input,state) {
		
		if(state[0] === 4){
			return {nextState:[state[0]+1,state[1]+input],output:state[1]+input};
		} else {
			return {nextState:[state[0]+1,state[1]+input],output:"None"};
		}
	
	}; 


	
	
	self.done = function(state){
    	return (state[0] === 5);
	};

	return self;



};
	
module.exports = function(){
	return new consumeFiveValues();
};