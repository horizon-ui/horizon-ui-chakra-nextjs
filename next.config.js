/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  // basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  // assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: '/horizon-ui-chakra-nextjs',
  async redirects() {
    return [ 
      {
        source: "/",
        destination: "/horizon-ui-chakra-nextjs/admin/default",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
