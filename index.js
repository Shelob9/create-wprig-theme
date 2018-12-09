const program = require('commander');
const path = require( 'path' );
const UPSTREAM = 'https://github.com/wprig/wprig/';
const fs = require( 'fs' );

program
	.version('0.1.0')
	.command('create [gitUrl] [slug] [proxyUrl]')
	.description('Setup WordPress plugin in')
	.action( (gitUrl,slug) => {
		let dir = __dirname + `/${slug}`;
		const baseName = path.basename(__dirname);
		dir = dir.replace(baseName + '/','');

		if (!fs.existsSync(dir)){
			fs.mkdirSync(dir);
		}

		const git = require('simple-git')(dir);
		git
			.init()
			.addRemote( 'upstream', UPSTREAM )
			.addRemote('origin', gitUrl )
			.pull('upstream', 'master', (r) => console.log(r))
			.push('origin', 'master');

	});

program.parse(process.argv);
