function average2() {
     var self = require('./stateMachine.js')();
     self.getNextValues = function(input,state) {
			if(input === "undefined") return {nextState:state,output:"undefined"};
			return {nextState:input,output:(input + state)/2};
		}; 
	return self;
}; 

module.exports = function(){
	return new average2();
};
