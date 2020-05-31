var isString = require('../../lib/rules/').isString;
var assert = require('assert');

describe("rule isString", function(){
	it("accepts null", function (){
		var res = isString()(null);
		assert.deepEqual(res,null);
	});
	it("accepts undefined", function (){
		var res = isString()(undefined);
		assert.deepEqual(res,null);
	});

	it("refuses number", function (){
		var res = isString()(1);
		assert.deepEqual(res, { code: 'isString'});
	});

	it("refuses object", function (){
		var res = isString()({});
		assert.deepEqual(res, { code: 'isString'});
	});

	it("refuses array", function (){
		var res = isString()([]);
		assert.deepEqual(res, { code: 'isString'});
	});
});