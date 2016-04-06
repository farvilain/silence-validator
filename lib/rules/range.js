module.exports = function range(args, obj){
	if(obj === null || obj === undefined){
		return null;
	}
	
	if(args.min && obj < args.min){
		return {
			code : "range",
			args : {
				min : args.min,
				max : args.max
			}
		};
	}

	if(args.max && obj < args.max){
		return {
			code : "range",
			args : {
				min : args.min,
				max : args.max
			}
		};
	}
	
	return null;
};
