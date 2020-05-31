var isArray = require('../../lib/rules/').isArray;
var assert = require('assert');

describe("rule isArray", function(){
	it("accepts null", function (){
		var res = isArray()(null);
		assert.deepEqual(res,null);
	});
	it("accepts undefined", function (){
		var res = isArray()(undefined);
		assert.deepEqual(res,null);
	});
	it("accepts Array", function (){
		var res = isArray()([]);
		assert.deepEqual(res, null);
	});
	it("refuses object", function (){
		var res = isArray()({});
		assert.deepEqual(res, { code: 'isArray' });
	});
	it("refuses number", function (){
		var res = isArray()(1);
		assert.deepEqual(res, { code: 'isArray' });
	});
	it("refuses string", function (){
		var res = isArray()('');
		assert.deepEqual(res, { code: 'isArray' });
	});
});