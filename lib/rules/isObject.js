module.exports = function isObject(obj){
	if(obj === null || obj === undefined){
		return null;
	}

    if ( typeof obj !== "object" ){
    	return {
		code : "isObject"
	};
    }
};
