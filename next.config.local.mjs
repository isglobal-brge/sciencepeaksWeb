/** @type {import('next').NextConfig} */
const nextConfigLocal = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // Keep this for GitHub Pages compatibility if you were using it
  },
  output: 'export',
  // No basePath or assetPrefix here
  // No distDir here, defaults to out/
};

export default nextConfigLocal; 