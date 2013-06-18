function TgivenD(D){
	var ddist = require('./ddist.js')();

	if(D == "disease"){
		ddist.init({'positive':0.99,'negative':0.01});
	} else if(D == "nodisease"){
		ddist.init({'positive':0.001,'negative':0.999});
	} else {
		throw new Exception('invalid value for D');
	}

	return ddist;
};

console.log(TgivenD("nodisease").prob("positive"));