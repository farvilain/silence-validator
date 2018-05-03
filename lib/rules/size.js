module.exports = function size(args){
	return function(obj){
		if(obj === null || obj === undefined){
			return null;
		}
		
		if(args.min && obj.length < args.min){
			return {
				code : "size",
				args : {
					min : args.min
				}
			};
		}

		if(args.max && obj.length > args.max){
			return {
				code : "size",
				args : {
					max : args.max
				}
			};
		}

		return null;
	};
};
