/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['images.pexels.com','d205bpvrqc9yn1.cloudfront.net','i.ytimg.com']
  },
  env: {
    RAPID_API_KEY: '7e8abd24e8mshed11c9c39baa09cp1b12b4jsn62f1f005e3b3',
    // RAPID_API_KEY: 'f3b3187b35msh2ee8bef211c7406p1d319djsn9b11796432b9',
  },
}

module.exports = nextConfig
