import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // This enables static export
  trailingSlash: true,
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
