const withImages = require('next-images')

/** @type {import('next').NextConfig} */
module.exports = withImages({
  reactStrictMode: true,
  experimental: { appDir: true }
})
