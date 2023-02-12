/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['rickandmortyapi.com', 'via.placeholder.com'],
  },
};

module.exports = nextConfig;
