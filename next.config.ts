import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "jvurupik0d.ufs.sh",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "utfs.io",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  // Empty turbopack config to satisfy Next.js 16 requirement
  turbopack: {},
  webpack: (config) => {
    // Suppress the specific webpack cache warning
    config.infrastructureLogging = {
      ...config.infrastructureLogging,
      // Only shows errors, hiding warning like cache ones
      level: "error",
    };

    return config;
  },
};

export default nextConfig;
