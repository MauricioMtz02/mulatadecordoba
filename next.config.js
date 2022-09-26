/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['https://api.lamulatadecordoba.com.mx'],
  },
  env: {
    BACKEND_IMAGES: 'https://api.lamulatadecordoba.com.mx/img',
    URL_BACKEND: 'https://api.lamulatadecordoba.com.mx/api'
  }
}

module.exports = nextConfig
