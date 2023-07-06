/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  httpAgentOptions: {
    keepAlive: false,
  }
}

export default nextConfig
