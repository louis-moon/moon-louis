// next.config.mjs
/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_PAGES === 'true'
// If you are NOT using a custom domain and your repo is not username.github.io,
// set this to your repo name so assets resolve under /<repo> on Pages:
const repoName = 'moon-louis'

export default {
  // This makes `next build` produce ./out (static export)
  output: 'export',

  // Next/Image needs this for static export
  images: { unoptimized: true },

  // If your site will be served at https://USERNAME.github.io/moon-louis/
  // these ensure correct asset URLs. If you use a custom domain or a
  // username.github.io repo, you can delete basePath/assetPrefix lines.
  assetPrefix: isGitHubPages ? `/${repoName}/` : undefined,
  basePath: isGitHubPages ? `/${repoName}` : undefined,
}
