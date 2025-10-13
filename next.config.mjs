// next.config.mjs
/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_PAGES === 'true'
const repoName = 'moon-louis'

export default {
  output: 'export',
  images: { unoptimized: true },

  // Only set these when building for GitHub Pages project site
  basePath: isGitHubPages ? `/${repoName}` : undefined,
  assetPrefix: isGitHubPages ? `/${repoName}/` : undefined,

  // Folder-style URLs help with some static hosts
  trailingSlash: true,
}
