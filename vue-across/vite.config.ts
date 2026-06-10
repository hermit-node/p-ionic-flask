import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tsconfigPaths from 'vite-tsconfig-paths';
import VueRouter from 'unplugin-vue-router/vite';
import { VueRouterAutoImports } from 'unplugin-vue-router';
import autoImport from 'unplugin-auto-import/vite';
import Unocss from 'unocss/vite';
import transformerDirective from '@unocss/transformer-directives';

// @ts-expect-error this is a js file.
import { serverPort } from './build/config.js';

const basePathForGeneration = './.generated/';

export default defineConfig({
	base: '/',
	build: {
		outDir: 'dist',
		emptyOutDir: true,
		sourcemap: true
	},
	server: {
		host: true,
		port: serverPort
	},
	preview: {
		host: true,
		port: serverPort
	},
	plugins: [
		tsconfigPaths(),

		// 🧭 Auto-Routing Setup
		VueRouter({
			routesFolder: 'src/pages',
			extensions: ['.page.vue'],
			dts: basePathForGeneration + 'typed-router-old.d.ts'
		}),

		// ✨ Auto-imports for Vue + Router + custom $router-old
		autoImport({
			imports: [
				'vue',
				VueRouterAutoImports,
				{
					'~/pages/router.ts': ['$router'] // ← custom hoistRouter output
				}
			],
			vueTemplate: true,
			dts: basePathForGeneration + 'auto-imports.d.ts',
			eslintrc: {
				enabled: true,
				filepath: basePathForGeneration + 'eslintrc-auto-import.json',
				globalsPropValue: true
			}
		}),

		vue({
			script: {
				propsDestructure: true
			}
		}),

		Unocss({
			transformers: [transformerDirective()]
		})
	]
});
