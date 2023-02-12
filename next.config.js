/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['rickandmortyapi.com', 'via.placeholder.com'],
  },
  webpack: (config) => {
    config.experiments.topLevelAwait = true;
    return config;
  },
};

module.exports = nextConfig;
