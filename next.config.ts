import type { NextConfig } from "next";

// Use a more reliable check for production builds
// GitHub Actions may not always set NODE_ENV, so we check for CI environment too
const isProd = process.env.NODE_ENV === "production" || process.env.CI === "true";

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
