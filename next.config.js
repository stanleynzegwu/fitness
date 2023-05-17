/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['images.pexels.com','d205bpvrqc9yn1.cloudfront.net','i.ytimg.com','lh3.googleusercontent.com'],
    },
}

module.exports = nextConfig