/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    // 추가
    emotion: true,
  },
}

module.exports = nextConfig
