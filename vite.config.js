// CommonJS-compatible Vite config that loads ESM Vue plugin dynamically
const { defineConfig } = require('vite')

module.exports = defineConfig(async () => {
	const vue = (await import('@vitejs/plugin-vue')).default
	return {
		plugins: [vue()],
		base: '/mwfw-site/',
	}
})