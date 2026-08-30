import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/treadmill-cadence/track-editor",
        destination: "/treadmill-cadence/track-editor/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
