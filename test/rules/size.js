var size = require('../../lib/rules/').size;
var assert = require('assert');

describe("rule size", function(){
	it("accepts null", function (){
		var res = size(null,null);
		assert.deepEqual(res,null);
	});
	it("accepts undefined", function (){
		var res = size(null,undefined);
		assert.deepEqual(res,null);
	});
});