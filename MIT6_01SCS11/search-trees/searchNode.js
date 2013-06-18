
function SearchNode(action,state,parent, actionCost){

	var self = this;

    this._init_ = function(action,state,parent){
        self.action = action;
        self.state = state;
        self.parent = parent;
        if(self.parent)
            self.cost = self.parent.cost + actionCost;
        else 
            self.cost = actionCost;
    };
    
    this._init_(action,state,parent);

	

    this.path = function(){
        if(!self.parent) {
            return [{action:self.action,state:self.state}];
        } else {
            return self.parent.path().concat([{action:self.action,state:self.state}]);
        }
    };

	this.inPath = function(s){
        if(s === self.state) return true;
        else if (!self.parent) return false;
        else return self.parent.inPath(s);
    };


};

module.exports = function() {
	return  SearchNode;
}