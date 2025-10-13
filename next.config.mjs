/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  // Emit a static site into ./out on `pnpm build`
  output: 'export',

  // If deploying to GitHub Pages under /moon-louis, keep these.
  // They are disabled in dev so localhost:3000 works at "/".
  basePath: isProd ? '/moon-louis' : '',
  assetPrefix: isProd ? '/moon-louis/' : '',

  // GH Pages serves directories best with trailing slashes
  trailingSlash: true,

  reactStrictMode: true,

  // If you ever add next/image, static export needs this:
  images: { unoptimized: true },
};

export default nextConfig;
