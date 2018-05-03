var regex = require('../../lib/rules/').regex;
var assert = require('assert');

describe("rule regex", function(){
	it("accepts null", function (){
		var res = regex(null)(null);
		assert.deepEqual(res,null);
	});
	it("accepts undefined", function (){
		var res = regex(null)(undefined);
		assert.deepEqual(res,null);
	});
});