module.exports = function() {
    return new stateMachine();
};


function stateMachine() {

        var self = this;

        this.init = function(initValue) {

            self._startState = initValue;             
        };

        this.legalInputs = [];

        this.start = function() {            
             self._state = self._startState;
        };
        this.step = function(input) {            
             var result = self.getNextValues(input,self._state);
             self._state = result.nextState;
             return result.output;
        };

        this.getCurrentState = function() {
            return self._state;
        };

        this.transduce =  function(inputs) {
            
            var outputs = [];
            for(var i=0;i<inputs.length;i++){
               outputs.push(self.step(inputs[i]));
               if(self.done(self._state)) return outputs;
            };
            return outputs;
            
        };
        this.getNextValues = function(input,state) {
            return {nextState:input+state,output:input+state};    
        };
        this.done = function(state){
              return false;
        };
};




