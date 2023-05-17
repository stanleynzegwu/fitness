/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
  appDir: true,
  serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
  domains: ['images.pexels.com','d205bpvrqc9yn1.cloudfront.net','i.ytimg.com','lh3.googleusercontent.com'],
  },
  webpack(config) {
  config.experiments = {
  ...config.experiments,
  topLevelAwait: true,
  };
  return config;
  },
  };
  
  module.exports = nextConfig;