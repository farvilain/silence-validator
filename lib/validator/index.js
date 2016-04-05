var node = require('./node');
var validation = require('./validation');
var validator = require('./validator');
module.exports = validator.bind(null, node, validation);