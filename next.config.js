/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'videorecordsado.blob.core.windows.net',
          port: '',
          pathname: '/**', // Allow any path under this hostname
        },
        {
          protocol: 'https',
          hostname: 'tnttechiesguide.blob.core.windows.net',
          port: '',
          pathname: '/**', // Allow any path under this hostname
        }
      ],
    },
};

module.exports = nextConfig;
