/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['d2goq47gtd0y9z.cloudfront.net', "scontent.cdninstagram.com"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.cdninstagram.com',
      },
    ]
  },
}

module.exports = nextConfig
