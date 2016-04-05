module.exports = function required(obj){
	if(obj === undefined){
		return {
			code : "required"
		};
	}
	
	return null;
};
