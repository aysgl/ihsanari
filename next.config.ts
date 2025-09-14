import type {NextConfig} from 'next'

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'peacefulqode.co.in'
            }
        ]
    }
}

export default nextConfig
