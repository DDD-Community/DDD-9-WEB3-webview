const path = require("path");
const nextTranslate = require('next-translate-plugin')
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  compiler: {
    styledComponents: true
  },
  webpack(config) {
    config.module.rules.push({

      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      resourceQuery: { not: /url/ }, // exclude if *.svg?url
      use: ['@svgr/webpack'],
    })
    return config
  }
}

module.exports = nextTranslate(nextConfig);
