/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [process.env.NODE_ENV !== 'production' ? '127.0.0.1' : 'api-mulata.mauricio-martinez.ga', 'ui-avatars.com'],
  },
  env: {
    URL_AVATAR: 'https://ui-avatars.com/api/?bold=true&background=F38630&color=fff',
    BACKEND_IMAGES: process.env.NODE_ENV !== 'production' ? 'http://127.0.0.1:8000/img' : 'https://api-mulata.mauricio-martinez.ga/img',
    URL_BACKEND: process.env.NODE_ENV !== 'production' ? 'http://127.0.0.1:8000/api' : 'https://api-mulata.mauricio-martinez.ga/api'
  }
}

module.exports = nextConfig