/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@acme/components", "@acme/utils"],
  experimental: {
    serverActions: true,
    typedRoutes: true,
  },
};

module.exports = nextConfig;
