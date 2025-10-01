/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: false,
    dangerouslyAllowSVG: true,
  },
  poweredByHeader: false,
}

module.exports = nextConfig
