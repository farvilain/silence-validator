
var validator = require('./validator/');
var rules = require('./rules/');

module.exports = {
	simple : validator,
	extended : function(){

		var res = validator();

		Object
		.keys(rules)
		.map(key => rules[key])
		.filter( (rule) => (typeof rule === "function") )
		.forEach( (rule) => {
			res[rule.name] = function(){
				res.add(rule.apply(rule, Array.prototype.slice.call(arguments)));
				return res;
			};
		});


		return res;

	}
};
