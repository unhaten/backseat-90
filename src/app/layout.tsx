import type { Metadata } from 'next'
import '@/styles/globals.css'
import '@/styles/fonts.css'
import '@/styles/normalize.css'
import fonts from '@/lib/constants/fonts'
import StoreProvider from '@/providers/store'
import { Toaster } from '@/components/ui'
import { ThemeProvider } from '@/providers/theme'
import { QueryProvider } from '@/providers/query/ui'

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
		<html lang='en' suppressHydrationWarning>
			<body
				className={`${fonts.roboto.variable} ${fonts.bebasNeue.variable} ${fonts.rockSalt.variable} antialiased`}
			>
				<QueryProvider>
					<ThemeProvider
						attribute='class'
						defaultTheme='system'
						enableSystem
						disableTransitionOnChange
					>
						<StoreProvider>
							<main>{children}</main>
						</StoreProvider>
					</ThemeProvider>
				</QueryProvider>
				<Toaster />
			</body>
		</html>
	)
}
