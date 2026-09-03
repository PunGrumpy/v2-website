/** @type {import('next').NextConfig} */
const nextConfig = {
  // Archived version: crawlable so old links keep resolving, but not indexed
  // in favour of the current site at www.pungrumpy.com.
  headers: async () => [
    {
      source: '/:path*',
      headers: [{ key: 'X-Robots-Tag', value: 'noindex, follow' }]
    }
  ],
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
      },
      {
        protocol: 'https',
        hostname: 'assets.pungrumpy.com'
      }
    ]
  }
}

export default nextConfig
