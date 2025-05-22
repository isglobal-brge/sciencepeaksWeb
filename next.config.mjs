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
  ...(process.env.GITHUB_ACTIONS === 'true' && {
    basePath: '/sciencepeaksWeb',
    assetPrefix: '/sciencepeaksWeb/', // Matches basePath for assets
  }),
}

export default nextConfig
