/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "export",
  images: {
    domains: ['images.unsplash.com'], // Add any external image domains here
    unoptimized: true, // Required for static export
  },
  output: 'export', // Indicates this is a static site export
}

module.exports = nextConfig 