/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  // basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  // assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: '/horizon-chakra-nextjs',
  async redirects() {
    return [ 
      {
        source: "/",
        destination: "/horizon-chakra-nextjs/admin/default",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
