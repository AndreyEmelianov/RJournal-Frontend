/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ['leonardo.osnova.io'],
  },
};

module.exports = nextConfig;
