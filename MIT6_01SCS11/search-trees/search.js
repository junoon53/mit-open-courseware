

var SearchNode =  require('./searchNode.js')();


var search = function(initialState,goalTest,actions,successor,depthFirst,maxNodes){
    if(goalTest(initialState)) return [{action:null,state:initialState}];

    agenda = [new SearchNode(null,initialState,null)];
    var visitedStates = [];
    var count = 1;
    while(agenda.length > 0 && maxNodes > count){

    	var parent = null;
    	
    	if(depthFirst)
    		parent = agenda.pop();
    	else 
    		parent = agenda.shift();

    	for(var i=0;i<actions.length;i++){
    		var newS = successor(parent.state, actions[i]);
    		console.log('newS: '+newS);
    		var newN = new SearchNode(actions[i], newS, parent);
    		if(goalTest(newS)) {
    			console.log('goal test passed: '+newS)	
    			return newN.path(); 
			} else if(containsObject(newS,visitedStates)) {
				// do nothing 
    		} else if(parent.inPath(newN)) {
    			// do nothing
    		} else {
    			visitedStates.push(newS);
    			agenda.push(newN);
    			console.log(visitedStates);
    			count++;
    		}
    	};
    }
   	return null;
};


module.exports =  search;


/************Utility Functions*******************/

function containsObject(obj, list) {
    var i;
    for (i = 0; i < list.length; i++) {
        if (list[i] === obj) {
            return true;
        }
    }

    return false;
};
