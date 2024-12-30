import type { Metadata } from 'next'
import fonts from '@/utils/constants/fonts'
import '@/styles/fonts.css'
import '@/styles/globals.css'
import '@/styles/normalize.css'

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app'
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
				{children}
			</body>
		</html>
	)
}
