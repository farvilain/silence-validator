var validator = require('../lib/');
var assert = require('assert');

describe("validator", function(){
	it("can work with optionnal field having subfields rules", function (){
		var v = validator
		.extended()
		.isObject()
		.field("optionnal")
			.isObject()
			.field("sub")
			.required();
		var errors = v.validate({});
		assert.deepEqual({},errors);
	});
});