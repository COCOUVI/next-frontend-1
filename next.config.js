import path from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const nextConfig = {
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src')
    return config
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'next-backend-production-d09c.up.railway.app',
        port: '',
        pathname: '/**',
      },
    ],
    domains: ['next-backend-production-d09c.up.railway.app'],
  },
}

export default nextConfig
