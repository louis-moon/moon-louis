/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  // Keep your settings here, but make basePath/assetPrefix dev-safe:
  basePath: isProd ? '/moon-louis' : '',
  assetPrefix: isProd ? '/moon-louis/' : '',

  // Recommended basics
  reactStrictMode: true,

  // DO NOT disable the app router. This must not be false:
  // experimental: { appDir: false }  <-- remove if you have it
};

export default nextConfig;
