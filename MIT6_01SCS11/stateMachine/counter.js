var counter = function() { 
	var self = this;
	var feedback = require('./feedback.js')();
	var cascade = require('./cascade.js')();
	var increment = require('./increment.js')();
	var delay =   require('./delay.js')();

	self.init = function(init,step) {
			increment.init(step);
			delay.init(init);	
			cascade.init([increment,delay]);  
			feedback.init(cascade);
	};
	self.start = function() {
			increment.start();
			delay.start();
			cascade.start();	
			feedback.start();	
	};
	self.step = function() {
			return feedback.step();
	};
};


module.exports = function(){
	return new counter();
}


