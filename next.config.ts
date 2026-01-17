import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    // Required for static export
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
