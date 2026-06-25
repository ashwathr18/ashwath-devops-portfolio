import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  output: "export",
  trailingSlash: true,
  basePath: "/ashwath-devops-portfolio",
  assetPrefix: "/ashwath-devops-portfolio",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
