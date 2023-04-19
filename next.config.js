/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["github.com", "media.discordapp.net"],
  },
}

module.exports = nextConfig
