var search = require('./search.js');


var stateMachineSearch = function(stateMachine, initialState,goalTest,depthFirst, maxNodes){
	if(!initialState) initialState = stateMachine.getCurrentState();
	if(!goalTest) goalTest = stateMachine.done;

	return search(initialState, goalTest, stateMachine.legalInputs, function(state, input) { return stateMachine.getNextValues(state,input).nextState; } , depthFirst, maxNodes);
};


module.exports = stateMachineSearch;