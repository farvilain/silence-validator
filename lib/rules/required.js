module.exports = function required(){
	return function(obj){
		if(obj === undefined){
			return {
				code : "required"
			};
		}
		
		return null;
	};
};
