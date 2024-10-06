/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api-eu-west-2.hygraph.com', // Domínio que você deseja permitir
        port: '',
        pathname: '**', // Permite todos os caminhos
      },
    ],
  },
}

module.exports = nextConfig
