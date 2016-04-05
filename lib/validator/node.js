function node(parent, thisPath){
	return {
		parent : parent,
		rules : [],
		children : {},
		elements : []
	};
}

module.exports = node;