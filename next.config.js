/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'eu-west-2.graphassets.com', // Domínio que você deseja permitir
        port: '',
        pathname: '**', // Permite todos os caminhos
      },
    ],
  },
}

module.exports = nextConfig
