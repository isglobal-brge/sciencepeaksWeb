/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
  // Only use basePath and assetPrefix when deployed to GitHub Pages
  ...(process.env.GITHUB_ACTIONS && {
    basePath: '/sciencepeaksWeb',
    assetPrefix: '/sciencepeaksWeb/',
  }),
}

export default nextConfig
