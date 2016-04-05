function validation(obj, node, path){
	var errors = {};

	var hasError = node.rules.some(function(rule){
		var error = rule(obj);
		if(error){
			errors[path] = error;
			return true;
		}
		return false;
	});

	if(hasError){
		return errors;
	}

	if(obj && typeof obj === 'object' ){
		Object.keys(node.children).forEach(function(nodeChildName){
			var childPath = (path === '' ? '' : (path+".") )+nodeChildName;
			var childErrors = validation(obj[nodeChildName], node.children[nodeChildName], childPath);
			for(var attrname in childErrors){
				errors[attrname] = childErrors[attrname];
			}
		});
	}

	if(Array.isArray(obj)){
		for(var i=0;i<obj.length;i++){
			var elem = obj[i];
			Object.keys(node.elements).forEach(function(nodeElemName){
				var elementError = validation(elem, node.elements[nodeElemName], path + "["+i+"]"	);
				for(var attrname in elementError){
					errors[attrname] = elementError[attrname];
				}
			});	
		}
	}
	

	return errors;
}

module.exports = validation;