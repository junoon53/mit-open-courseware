
function ddist(){

	var self = this;

	this.init = function(dictionary){
		self.d = dictionary || {};
	};

	this.prob = function(elt){
		if(self.d[elt] !== "undefined"){
			return self.d[elt];
		} else {
			return 0;
		}
	};

    this.support = function(){
    	var result = {};
    	for(prop in self.d){
    		if(self.d[prop] > 0)
    			result[prop] = self.d[prop];
    	}

    	return result;
    };

    this.draw = function(){
    	var r = Math.random();
    	var sum = 0;
    	for(prop in self.support()){
    		sum += self.prob(prop);
    		if(r < sum) return prop;
    	}

    };

};

module.exports = function() {
	return new ddist();
}