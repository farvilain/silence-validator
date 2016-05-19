var isArray = require('../../lib/rules/').isArray;
var assert = require('assert');

describe("rule isArray", function(){
	it("accepts null", function (){
		var res = isArray(null,null);
		assert.deepEqual(res,null);
	});
	it("accepts undefined", function (){
		var res = isArray(null,undefined);
		assert.deepEqual(res,null);
	});
});