import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  /* config options here */
  images: {
    qualities: [75, 80, 85, 90, 100, ],
    domains: ["cdn.sanity.io"],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [320, 420, 768, 1024, 1200],
    minimumCacheTTL: 60,
  },
};

export default nextConfig;
