import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const repoBase = "/portfolio";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  basePath: isProd ? repoBase : "",
  assetPrefix: isProd ? `${repoBase}/` : undefined,
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  trailingSlash: true, // helpful for GH Pages routing
};

export default nextConfig;
