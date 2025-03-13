/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'zwtxzfvoordeefpkxigr.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/inventory-images/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;

