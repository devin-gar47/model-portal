/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  // distDir: "./build",
  experimental: {
    appDir: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};
