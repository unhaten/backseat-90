import type { Metadata } from 'next'
import '@/styles/globals.css'
import '@/styles/fonts.css'
import '@/styles/normalize.css'
import fonts from '@/lib/constants/fonts'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import { getMessages } from 'next-intl/server'
import { NextIntlClientProvider } from 'next-intl'

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

export default async function LocaleLayout({
	children,
	params
}: {
	children: React.ReactNode
	params: Promise<{ locale: string }>
}) {
	const { locale } = await params
	if (!routing.locales.includes(locale as 'en' | 'de' | 'ru')) {
		notFound()
	}

	const messages = await getMessages()

	return (
		<html lang={locale} suppressHydrationWarning>
			<body
				className={`${fonts.roboto.variable} ${fonts.bebasNeue.variable} ${fonts.rockSalt.variable} antialiased`}
			>
				<NextIntlClientProvider messages={messages}>
					{children}
				</NextIntlClientProvider>
			</body>
		</html>
	)
}
