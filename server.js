'use strict';

import libs from'./plugins/OneFileToImportThemAll.js';
console.log(libs);
libs.a(); // SHould ouput 'in A'

/*
	import {a, b} from'./plugins/OneFileToImportThemAll.js';
	console.log(a, b);
	a(); // SHould ouput 'in A'
*/