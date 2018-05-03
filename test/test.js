var validator = require('../lib/');
var assert = require('assert');

describe("validator", function(){
	it("can work with optionnal field having subfields rules", function (){
		var v = validator
		.extended()
		.field("range").required().isNumber().notNull().range({min:10})
		;
		var errors = v.validate({range:12});
		assert.deepEqual({},errors);
	});
});