import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['images.ctfassets.net'], // Allow loading images from this domain
  },
};

export default nextConfig;
