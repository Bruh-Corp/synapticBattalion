const fs = require('fs');

const OUTPUT_PATH = 'src/routes/writings';

const articles = fs.readdirSync(OUTPUT_PATH);
articles.forEach((article) => {
	let contents = fs.readFileSync(OUTPUT_PATH + '/' + article + '/index.html');
	fs.writeFileSync(OUTPUT_PATH + '/' + article + '/+page.svelte', contents);
	fs.rm(OUTPUT_PATH + '/' + article + '/index.html', (e) => {
		console.error(e);
	});
});
