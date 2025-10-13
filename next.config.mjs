// next.config.mjs
/** @type {import('next').NextConfig} */
export default {
  output: 'export',
  images: { unoptimized: true },

  // GitHub Pages project site lives at /moon-louis
  basePath: '/moon-louis',
  assetPrefix: '/moon-louis/',

  // Helps static hosts serve folder-style routes
  trailingSlash: true,
}
