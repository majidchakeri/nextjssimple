/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    REACT_APP_DEV_URL: process.env.REACT_APP_DEV_URL,
    REACT_APP_API_URL: process.env.REACT_APP_API_URL,
    REACT_APP_TOKEN_NAME: process.env.REACT_APP_TOKEN_NAME,
    // other variables
  },
};

module.exports = nextConfig;
