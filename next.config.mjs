// next.config.mjs
/** @type {import('next').NextConfig} */
export default {
  output: 'export',
  images: { unoptimized: true },

  // Project site lives at /moon-louis
  basePath: '/moon-louis',
  assetPrefix: '/moon-louis/',

  // Avoids route 404s on static hosts
  trailingSlash: true,
}
