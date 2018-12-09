'use strict';
const fs = require('fs');
module.exports = function(themeDir,slug){
	const configPath = `${themeDir}/config/themeConfig.js`;
	const config = require( configPath );
	config.theme.slug = slug;
	fs.writeFile(`${themeDir}/config/themeConfigCustom.json`, JSON.stringify(config), 'utf8', () => console.log('Created config file.'));
};
