/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io'
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com'
      },
      {
        protocol: 'http',
        hostname: 'www.google.com'
      },
      {
        protocol: 'https',
        hostname: 'api.microlink.io'
      }
    ]
  }
}

export default nextConfig
