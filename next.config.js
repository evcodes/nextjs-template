/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        hostname: "live.staticflickr.com"
      }
    ]
  },
  async headers() {
    return [
      {
        source: '/isr',
        headers: [
          {
            key: 'cache-control',
            value: 'max-age=10, stale-while-revalidate=10',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
