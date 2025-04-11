/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: false,
    serverActions: {}, // Set this to an object, not a boolean
  },
};

module.exports = nextConfig;
