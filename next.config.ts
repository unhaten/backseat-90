import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'http',
				hostname: process.env.NEXT_PUBLIC_API_HOST || 'localhost',
				port: '2000'
			},
			{
				protocol: 'http',
				hostname: 'localhost',
				port: '2000'
			},
			{
				protocol: 'http',
				hostname: process.env.NEXT_PRIVATE_API_HOST || 'localhost',
				port: '2000'
			}
		]
	}
}

export default withNextIntl(nextConfig)
