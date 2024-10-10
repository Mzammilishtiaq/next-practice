/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig
// next.config.js
module.exports = {
    env: {
      GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
      GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    },
  };
  