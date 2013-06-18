function fibonacci() {

	var adder = require('./adder.js')();
	var delay1 = require('./delay.js')();
	var delay2 = require('./delay.js')();
	var delay3 = require('./delay.js')();
	var parallel = require('./parallel.js')();
	var cascade1 = require('./cascade.js')(); 
	var cascade2 = require('./cascade.js')();
	var feedback = require('./feedback.js')();

	var self = this;

	self.init = function() {
		delay1.init(0);
		delay2.init(0);
		delay3.init(1);
		cascade1.init([delay1,delay3]);
		parallel.init([delay2,cascade1]);
		cascade2.init([parallel,adder]);
		feedback.init(cascade2);
	};

	self.start = function() {
		delay1.start();	
		delay2.start();
		delay3.start();
		parallel.start();
		cascade2.start();	
		feedback.start();	
	};

	self.step = function() {
		return feedback.step();
	};
} 

module.exports = function(){
	return new fibonacci();
};
