//DEA@1.1.0
require("fs")
.readdirSync(__dirname)
.filter( (file) => (file !== __filename) )
.forEach( (file) => {
	const name = file.replace(/.js$/, '');
	exports[name] = require('./'+name);
});
