/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['leonardo.osnova.io'],
  },
};

module.exports = nextConfig;
