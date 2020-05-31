const node = require('./node');
const validation = require('./validation');
const validator = require('./validator');
module.exports = validator.bind(null, node, validation);