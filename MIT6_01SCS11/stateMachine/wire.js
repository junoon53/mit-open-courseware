function wire() {
	var self = require('./stateMachine.js')();
	self.getNextValues = function(input,state) {

		return {output:input,state:state};
	};
};

module.exports = function(){
	return new wire();
};
   
