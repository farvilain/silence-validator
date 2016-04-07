function validator(node, validation){
	var current = node(null, "");
	var root = current;

	var stack = [];

	var res = {};

	res.field = function (fieldName){
		var child =  node(current);
		//TODO if override?
		current.children[fieldName] = child;
		current = child;
		stack.push(child);

		return res;
	};

	res.each = function () {
		var elem =  node(current);
		//TODO if override?
		current.elements.push(elem);
		current = elem;
		stack.push(elem);

		return res;
	};

	res.end = function (){
		//TODO warning if on root
		current = current.parent;
		stack.pop();
		
		return res;
	};

	//Add a function(obj) that valides obj
	res.add = function (f){
		Array.prototype.slice.call(arguments).forEach(function(arg) {
			current.rules.push(arg);
		});

		return res;
	};

	res.validate = function (obj){
		return validation(obj, root, "");
	};

	return res;
}

module.exports = validator;