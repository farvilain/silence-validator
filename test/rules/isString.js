var isString = require('../../lib/rules/').isString;
var assert = require('assert');

describe("rule isString", function(){
	it("accepts null", function (){
		var res = isString(null);
		assert.deepEqual(res,null);
	});
	it("accepts undefined", function (){
		var res = isString(undefined);
		assert.deepEqual(res,null);
	});
});