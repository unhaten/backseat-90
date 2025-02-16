import { HomeButton } from '@/components'
import { Card } from '@/components/ui'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Backseat 90 - Auth',
	description: 'Log in or Sign up to browse favorites tracks and more',
	appleWebApp: {
		title: 'Backseat 90 - Auth',
		statusBarStyle: 'default'
	},
	openGraph: {
		title: 'Backseat 90 - Auth',
		description: 'Log in or Sign up to browse favorites tracks and more',
		siteName: 'Backseat 90 - Auth'
	}
}

export default function AuthLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<div className='relative flex min-h-svh w-full items-center justify-center p-6 md:p-10'>
			{/* <Pattern /> */}
			<div className='absolute top-0 left-0 z-[1] bg-background/70 w-full h-full' />
			<div className='relative w-full max-w-sm z-[2]'>
				<Card className='rounded-lg'>
					<HomeButton />
					{children}
				</Card>
			</div>
		</div>
	)
}
