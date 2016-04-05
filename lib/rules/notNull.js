module.exports = function notNull(obj){
	if(obj === null){
		return {
			code : "notNull"
		};
	}
	return null;
}
