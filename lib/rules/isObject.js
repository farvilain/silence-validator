module.exports = function isObject(args, obj){
	if(obj === null || obj === undefined){
		return null;
	}


    return ( typeof obj === 'object') ;
};
