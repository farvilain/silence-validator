const validator = require('./validator/');
const rules = require('./rules/');

module.exports = {
	simple : validator,
	extended : () => {

		const res = validator();

		Object
		.keys(rules)
		.map(key => rules[key])
		.filter( (rule) => (typeof rule === "function") )
		.forEach( (rule) => {
			res[rule.name] = () => {
				res.add(rule.apply(rule, Array.prototype.slice.call(arguments)));
				return res;
			};
		});


		return res;

	}
};
