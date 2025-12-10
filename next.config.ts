import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.animaapp.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
