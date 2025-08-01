import type { NextConfig } from "next";
const imageHost = process.env.IMAGE_HOST;
const imagePort = process.env.IMAGE_PORT || '1337';
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: imageHost || '',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  }
};

export default nextConfig;
