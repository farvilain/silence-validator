module.exports = function enumerated(args){
	return function(obj){
		if(obj === null || obj === undefined){
			return null;
		}
		
		if(args.values.indexOf(obj) === -1){
			return {
				code : "enum",
				enum : {
					name : args.name,
					values : args.values
				}
			};
		}
		return null;
	};
};
