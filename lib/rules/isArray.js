module.exports = function isArray(){
	return function (obj){
		if(obj === null || obj === undefined){
			return null;
		}
		
		if(!Array.isArray(obj)){
			return {
				code : "isArray"
			};
		}
		return null;
	};
};
