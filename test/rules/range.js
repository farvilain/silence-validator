var range = require('../../lib/rules/').range;
var assert = require('assert');

describe("rule range", function(){
	it("accepts null", function (){
		var res = range(null)(null);
		assert.deepEqual(res,null);
	});
	it("accepts undefined", function (){
		var res = range(null)(undefined);
		assert.deepEqual(res,null);
	});
});