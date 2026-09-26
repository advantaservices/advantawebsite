import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  allowedDevOrigins: ["192.168.0.197", "127.0.0.1"],
  async redirects() {
    return [
      {
        source: "/legal",
        destination: "/legal/terms-of-use",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
