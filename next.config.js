/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["pt-br"],
    defaultLocale: "pt-br",
  },
  images:{
    domains: ['drive.google.com']
  }
}

module.exports = nextConfig
