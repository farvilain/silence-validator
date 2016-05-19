var required = require('../../lib/rules/').required;
var assert = require('assert');

describe("rule required", function(){
	it("accepts null", function (){
		var res = required(null);
		assert.deepEqual(res,null);
	});
});