import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  crossOriginOrigin: "anonymous",
  typescript: {
    ignoreBuildErrors: true,
  },
  logging: {
    fetches: {
      fullUrl: true,
      hmrRefreshes: true,
    },
  },
  expireTime: 3600,
};

export default nextConfig;
