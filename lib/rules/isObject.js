module.exports = function isObject(){
	return function(obj){
		if(obj === null || obj === undefined){
			return null;
		}

		if ( typeof obj !== "object" ) {
			return {code : "isObject"};
		}

		if ( typeof obj !== "Array" ) {
			return {code : "isObject"};
		}
	};
};
