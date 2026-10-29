import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    // Every image is already a compressed .webp/.png, and a few are animated
    // (the flower and bird loops), so Next's re-encoding step is skipped.
    unoptimized: true,
  },
};

export default nextConfig;
