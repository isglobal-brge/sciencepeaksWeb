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
  // basePath: '/sciencepeaksWeb', // Removed for custom domain
  // assetPrefix: '/sciencepeaksWeb/', // Removed for custom domain
  // No distDir here, defaults to out/
}

export default nextConfig
