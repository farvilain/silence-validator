var notNull = require('../../lib/rules/').notNull;
var assert = require('assert');

describe("rule notNull", function(){
	it("accepts undefined", function (){
		var res = notNull()(undefined);
		assert.deepEqual(res,null);
	});
});