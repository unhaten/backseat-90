import type { Metadata } from 'next'
import '@/styles/globals.css'
import '@/styles/fonts.css'
import '@/styles/normalize.css'
import fonts from '@/lib/constants/fonts'
import StoreProvider from '@/providers/store'
import { Toaster } from '@/components/ui'

export const metadata: Metadata = {
	title: 'Backseat 90 - Listen to 90s Underground Rap',
	description: "Sit back and relax with 90's underground rap songs",
	appleWebApp: {
		title: 'Backseat 90',
		statusBarStyle: 'default'
	},
	openGraph: {
		title: 'Backseat 90',
		description: "Sit back and relax with 90's underground rap songs",
		siteName: 'Backseat 90'
	}
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body
				className={`${fonts.roboto.variable} ${fonts.bebasNeue.variable} ${fonts.rockSalt.variable} antialiased`}
			>
				<StoreProvider>
					<main>{children}</main>
				</StoreProvider>
				<Toaster />
			</body>
		</html>
	)
}
