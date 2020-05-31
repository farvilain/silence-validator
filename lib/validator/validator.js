function validator(node, validation){
	var stack = [node("")];

	function current(){
		return stack[stack.length-1];
	}

	var res = {};

	res.field = function (fieldName){
		var child =  node();
		//TODO if override?
		current().children[fieldName] = child;
		stack.push(child);

		return res;
	};

	res.each = function () {
		var elem =  node();
		//TODO if override?
		current().elements.push(elem);
		stack.push(elem);

		return res;
	};

	res.end = function (){
		stack.pop();
		return res;
	};

	//Add a function(obj) that valides obj
	res.add = function (f){
		Array.prototype.slice.call(arguments).forEach(function(arg) {
			current().rules.push(arg);
		});

		return res;
	};

	res.validate = function (obj){
		return validation(obj, stack[0], "");
	};

	res.assertRest = function(obj) {
		const errors = res.validator(obj);
		if ( errors ) {
			throw {
				statusCode: 422,
				restCode: 'paramsValidation',
				errors: errors
			};
		}
	};
	
	return res;
}

module.exports = validator;