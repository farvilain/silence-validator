var enumerated = require('../../lib/rules/').enumerated;
var assert = require('assert');

describe("rule enumerated", function(){
	it("accepts null", function (){
		var res = enumerated(null,null);
		assert.deepEqual(res,null);
	});
	it("accepts undefined", function (){
		var res = enumerated(null,undefined);
		assert.deepEqual(res,null);
	});
	it("accepts value in enum", function (){
		var res = enumerated({ name:"letters",values:["a","b","c"]},"a");
		assert.deepEqual(res,null);
	});
	describe("with bad value, result", function (){
		var res = enumerated({ name:"letters",values:["a","b","c"]},"d");
		it("is an object", ()=>{
			assert.notEqual(res,null);
		});
		it("has the code enum", ()=>{
			assert.strictEqual(res.code,"enum");
		});
		it("describe the enum", ()=>{
			assert.strictEqual(res.enum.name,"letters");
			assert.deepEqual(res.enum.values,['a','b','c']);
		});
	});
});