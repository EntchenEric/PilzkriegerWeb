/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack: (config) => {
		// Fix for using route handlers in modules
		config.resolve.fallback = { fs: false };

		return config;
	},
	images: {
		domains: ['localhost', 'via.placeholder.com'],
	},
	output: "export",
	outDir: "dist"
}

module.exports = nextConfig