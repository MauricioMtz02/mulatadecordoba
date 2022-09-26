/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['api.lamulatadecordoba.com.mx'],
  },
  env: {
    BACKEND_IMAGES: 'https://api.lamulatadecordoba.com.mx/img',
    URL_BACKEND: 'https://api.lamulatadecordoba.com.mx/api'
  }
}

module.exports = nextConfig