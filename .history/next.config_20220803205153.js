/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript:{
    ignoreBuildErrors:true
  },
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:['scontent-mia3-1.xx.fbcdn.net','lh3.googleusercontent.com'],
  }
}


module.exports = nextConfig
