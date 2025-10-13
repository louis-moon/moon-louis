/** @type {import('next').NextConfig} */
export default {
  // produce a static site in ./out
  output: 'export',

  // 👇 IMPORTANT for GH Pages + static export
  trailingSlash: true,
  images: { unoptimized: true },

  // DO NOT set basePath or assetPrefix when using a custom domain at /
  // basePath: '',
  // assetPrefix: '',

  reactStrictMode: true,
};
