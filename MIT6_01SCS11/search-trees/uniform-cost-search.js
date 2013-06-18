var SearchNode =  require('./search.js')();
var PriorityQueue = require('../../lib/priority-queue.js');

var UniformCostSearch = function(initialState, goalTest, actions, successor, heuristic){

    var startNode = new SearchNode(null, initialState, null);

    if(goalTest(initialState)) 
        return startNode.path();

    var agenda = new PriorityQueue();
    agenda.push(startNode,0);
    expanded = [];

    while(!agenda.isEmpty()){
        var n = agenda.pop();
        if(!containsObject(n.state,expanded))
            expanded.push(n.state);
        if(goalTest(n.state))
            return n.path();
        for(var i=0;i<actions.length,i++){
            var s = successor(n.state, actions[i]);
            var newS = s.state;
            var cost = s.cost;

            if(!containsObject(newS)){
                newN = SearchNode(a, newS, n, cost);
                agenda.push(newN, newN.cost + heuristic(newS));
            }
        }
    }

};


module.exports = function() {
	return stateMachineSearch;
};


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
