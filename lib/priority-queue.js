function priorityQueue() {

var self = this;

this._init_ = function() {
 self.data = [];
};

this._init_();

this.push = function(item,cost){
 self.data.push({item:item,cost:cost});
};

this.pop = function(){
 var result = self.data[0];
 for(var i=1;i<self.data.length;i++){
  if(self.data[i].cost <= result.cost)
   result = self.data[i];
 };
 return result;
};

this.isEmpty = function(){
 return self.data.length === 0;
};

};

modules.export = priorityQueue;
