import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";
const basePath = isDev ? "" : "/portfolio";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
