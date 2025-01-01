import type { Metadata } from 'next'
import '@/styles/globals.css'
import '@/styles/fonts.css'
import '@/styles/normalize.css'
import fonts from '@/lib/constants/fonts'

export const metadata: Metadata = {
	title: 'Backseat 90',
	description: "Sit back and relax with 90's underground rap songs"
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
				<main>{children}</main>
			</body>
		</html>
	)
}
