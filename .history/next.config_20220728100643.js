/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:['scontent-mia3-1.xx.fbcdn.net']
  }
}

module.exports = nextConfig
