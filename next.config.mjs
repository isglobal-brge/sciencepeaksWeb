/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  poweredByHeader: false,
  reactStrictMode: true,
  eslint: {
    dirs: [
      "app",
      "components/landing",
      "components/cookie-banner.tsx",
      "components/cookie-settings-dialog.tsx",
    ],
  },
  experimental: { cpus: 2 },
  webpack(config, { dev }) {
    // Next's bundled Webpack crashes when restoring this export's disk cache.
    // Keep development caching; production exports take a fresh compilation.
    if (!dev) config.cache = false;
    return config;
  },
};

export default nextConfig;
