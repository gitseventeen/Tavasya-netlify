/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // ✅ required for Pages (next export)
  reactStrictMode: true,
  images: {
    unoptimized: true, // ✅ disable image optimization for static export
  },
}

module.exports = nextConfig
