module.exports = function regex(args){
	return function(obj){
		if(obj === null || obj === undefined){
			return null;
		}
		
		if(!args.regex.test(obj)){
			return {
				code : "regex",
				regex : {
					name : args.name,
					regex : args.regex
				}
			};
		}
		return null;
	};
};
