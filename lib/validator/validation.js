function validation(obj, node, path){
	const errors = {};

	const hasError = node.rules.some(function(rule){
		const error = rule(obj);
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
			const childPath = (path === '' ? '' : (path+".") )+nodeChildName;
			const childErrors = validation(obj[nodeChildName], node.children[nodeChildName], childPath);
			for(const attrname in childErrors){
				errors[attrname] = childErrors[attrname];
			}
		});
	}

	if(Array.isArray(obj)){
		for(const i=0;i<obj.length;i++){
			const elem = obj[i];
			Object.keys(node.elements).forEach(function(nodeElemName){
				const elementError = validation(elem, node.elements[nodeElemName], path + "["+i+"]"	);
				for(const attrname in elementError){
					errors[attrname] = elementError[attrname];
				}
			});	
		}
	}
	

	return errors;
}

module.exports = validation;