/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'videorecordsado.blob.core.windows.net',
            port: '',
            pathname: '/tnttechies/**',
          },
          {
            protocol: 'https',
            hostname: 'tnttechiesguide.blob.core.windows.net',
            port: '',
            pathname: '/course-banners/**',
          }
        ],
      },
}

module.exports = nextConfig
