// CommonJS-compatible Vite config that loads ESM Vue plugin dynamically
const { defineConfig } = require('vite')
const { resolve } = require('path')

module.exports = defineConfig(async () => {
	const vue = (await import('@vitejs/plugin-vue')).default
	return {
		plugins: [vue()],
		base: '/',
		build: {
			rollupOptions: {
				input: {
					main: resolve(__dirname, 'index.html'),
					lineup: resolve(__dirname, 'lineup.html'),
					praktisch: resolve(__dirname, 'praktisch.html'),
				}
			}
		}
	}
})