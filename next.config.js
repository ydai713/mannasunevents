/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['mannasunevents-images.s3.us-west-2.amazonaws.com', "scontent.cdninstagram.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "scontent.cdninstagram.com",
      },
    ]
  },
}

module.exports = nextConfig
