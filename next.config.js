/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  assetPrefix: "./",
  reactStrictMode: true,
  env: {
    WEATHER_API_KEY: "9555cb95eb064a5baaf202010232108",
  },
};

module.exports = nextConfig;
