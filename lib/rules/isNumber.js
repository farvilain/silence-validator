module.exports = function isNumber(){
	return function(obj){
		if(obj === null || obj === undefined){
			return null;
		}
		
		if(typeof obj !== "number"){
			return {
				code : "isNumber"
			};
		}
		return null;
	};
};
