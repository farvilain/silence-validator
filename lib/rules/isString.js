module.exports = function isString(){
	return function(obj){
		if(obj === null || obj === undefined){
			return null;
		}
		
		if(typeof obj !== "string" ){
			return {
				code : "isString"
			};
		}
		return null;
	};
};
