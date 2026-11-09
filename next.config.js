/** @type {import("next").NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,

  images: {
    unoptimized: true,
  },

  basePath: "/SeoulSis2026",
  assetPrefix: "/SeoulSis2026/",
};

module.exports = nextConfig;
