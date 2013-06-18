function multiplier() {
	var self = require('./stateMachine.js')();
	self.getNextValues = function(inputs) {
		var result = 1;
		for(var i=0;i<inputs.length;i++) {
			if(inputs[i] === "undefined") return {output:"undefined"};
			result*=inputs[i];
	    } 
		
		return {output:result};	
	}; 
	return self;
};

module.exports = function(){
	return new multiplier();
};
   
