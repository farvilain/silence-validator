var isNumber = require('../../lib/rules/').isNumber;
var assert = require('assert');

describe("rule isNumber", function(){
	it("accepts null", function (){
		var res = isNumber()(null);
		assert.deepEqual(res,null);
	});

	it("accepts undefined", function (){
		var res = isNumber()(undefined);
		assert.deepEqual(res,null);
	});

	it("accepts number", function (){
		var res = isNumber()(1);
		assert.deepEqual(res,null);
	});

	it("refuses string", function (){
		var res = isNumber()('');
		assert.deepEqual(res, { code: 'isNumber'});
	});

	it("refuses object", function (){
		var res = isNumber()({});
		assert.deepEqual(res, { code: 'isNumber'});
	});

	it("refuses array", function (){
		var res = isNumber()([]);
		assert.deepEqual(res, { code: 'isNumber'});
	});
});