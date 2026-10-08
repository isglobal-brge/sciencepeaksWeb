/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  poweredByHeader: false,
  reactStrictMode: true,
  eslint: {
    dirs: ["app", "components/landing", "components/cookie-banner.tsx"],
  },
  experimental: { cpus: 2 },
};

export default nextConfig;
