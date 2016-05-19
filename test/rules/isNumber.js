var isNumber = require('../../lib/rules/').isNumber;
var assert = require('assert');

describe("rule isNumber", function(){
	it("accepts null", function (){
		var res = isNumber(null);
		assert.deepEqual(res,null);
	});
	it("accepts undefined", function (){
		var res = isNumber(undefined);
		assert.deepEqual(res,null);
	});
});