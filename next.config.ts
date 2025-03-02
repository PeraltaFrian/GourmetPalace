import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', 
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        pathname: '/**',  
      },
    ],
  },
};

export default nextConfig;
