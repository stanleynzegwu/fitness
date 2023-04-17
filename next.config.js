/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['images.pexels.com']
  },
  env: {
    RAPID_API_KEY: '7e8abd24e8mshed11c9c39baa09cp1b12b4jsn62f1f005e3b3',
  },
}

module.exports = nextConfig
