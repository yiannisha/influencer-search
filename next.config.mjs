/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // set up hostname "imagedelivery.net"
  images: {
    domains: ["imagedelivery.net"],
  },
};

export default nextConfig;
