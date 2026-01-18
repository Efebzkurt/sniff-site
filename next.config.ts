import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // Unsplash'a izin veriyoruz
      },
    ],
  },
};

export default nextConfig;
