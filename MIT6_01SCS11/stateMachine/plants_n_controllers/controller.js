function controller() {
	var k = -1.5;
	var dDesired = 1.0;

	var self = require('../stateMachine.js')();
	var adder = require('../adder.js')();
	var multiplier = require('../multiplier.js')();
	var cascade = require('../cascade.js')();

	self.getNextValues = function(input,state) {
		var velocity = multiplier.step([adder.step([dDesired,multiplier.step([-1,input])]),k]);
		return {output:velocity,nextState:velocity};
	};

	return self;

};

module.exports = function(){
	return new controller();
}