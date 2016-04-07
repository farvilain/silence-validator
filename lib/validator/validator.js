function validator(node, validation){
	var root = node(null, "");

	var stack = [root];

	var res = {};

	res.field = function (fieldName){
		var child =  node(stack[stack.length-1]);
		//TODO if override?
		stack[stack.length-1].children[fieldName] = child;
		stack.push(child);

		return res;
	};

	res.each = function () {
		var elem =  node(stack[stack.length-1]);
		//TODO if override?
		stack[stack.length-1].elements.push(elem);
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
			stack[stack.length-1].rules.push(arg);
		});

		return res;
	};

	res.validate = function (obj){
		return validation(obj, root, "");
	};

	return res;
}

module.exports = validator;