import type { NextConfig } from "next";
import { NEXT_REDIRECTS } from "./src/lib/redirects";

const nextConfig: NextConfig = {
  async redirects() {
    return NEXT_REDIRECTS;
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
    ];
  },
};

export default nextConfig;
