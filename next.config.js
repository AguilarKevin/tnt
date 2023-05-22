/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['src'],
  },
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
}

module.exports = nextConfig
