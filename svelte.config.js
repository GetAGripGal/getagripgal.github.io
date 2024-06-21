import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	extensions: ['.svelte', '.svx'],

	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null
		})
	},
};

export default config;