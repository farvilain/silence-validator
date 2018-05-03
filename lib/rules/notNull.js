module.exports = function notNull(){
	return function (obj){
		if(obj === null){
			return {
				code : "notNull"
			};
		}
		return null;
	};
}
