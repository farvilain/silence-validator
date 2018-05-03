var isObject = require('../../lib/rules/').isObject;
var assert = require('assert');

describe("rule isObject", function(){
	it("accepts null", function (){
		var res = isObject()(null);
		assert.deepEqual(res,null);
	});
	it("accepts undefined", function (){
		var res = isObject()(undefined);
		assert.deepEqual(res,null);
	});
});