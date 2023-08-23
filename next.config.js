/** @type {import('next').NextConfig} */
const withPwa = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  skipWaiting: true,
});

const nextConfig = withPwa({
  assetPrefix: "./",
  reactStrictMode: true,
  env: {
    WEATHER_API_KEY: "9555cb95eb064a5baaf202010232108",
  },
});

module.exports = nextConfig;
