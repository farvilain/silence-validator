var validator = require('./validator/');

module.exports = {
	simple : validator,
	extended : function(args){

		var res = validator();
		var rules = require('./rules/');

		Object
		.keys(rules)
		.map(key => rules[key])
		.filter( (rule) => (typeof rule === "function") )
		.forEach( (rule) => {
			res[rule.name] = ( () => res.add(rule) )
		});

		return res;

	}
};