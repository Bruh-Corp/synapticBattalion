import adapter from '@sveltejs/adapter-auto';
import {
    vitePreprocess
} from '@sveltejs/kit/vite';
const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: vitePreprocess(),

    kit: {
        adapter: adapter({ pages: "build/" }),
        paths: {
            base: dev ? '' : "/synapticBattalion"
        },

    }
};

export default config;
