const program = require('commander');
const path = require( 'path' );
const UPSTREAM_URL = 'https://github.com/shelob9/wprig'; //should be https://github.com/wprig/wprig
const UPSTREAM_BRANCH = 'feature/228'; //should be 'v2.0'
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
			.addRemote( 'upstream', UPSTREAM_URL )
			.addRemote('origin', gitUrl )
			.pull('upstream', UPSTREAM_BRANCH )
			.push('origin', 'master', () => {
				console.log( 'Repo created and pushed.' );
				const makeConfig = require( './modules/makeConfig');
				makeConfig( dir, slug );
				git
					.add('./*')
					.commit("Add custom config")
					.push( 'origin', 'master' );
			});
	});

program.parse(process.argv);
