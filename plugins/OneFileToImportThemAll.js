import fs from 'fs';
import path from 'path';

const _dirname = '' || __dirname;

const fileFilterer = (file) => {
	return /(.*\.js)$/.test(file) && file !== path.basename(__filename);
};

const files = fs.readdirSync(_dirname).filter(fileFilterer);

files.forEach( (file) => {
	module.exports[path.basename(file, '.js')] = require(path.join(_dirname,file));
});