import '@/styles/globals.css'
import '@/styles/fonts.css'
import '@/styles/normalize.css'
import fonts from '@/lib/constants/fonts'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import { getTranslations } from 'next-intl/server'
import { hasLocale, NextIntlClientProvider } from 'next-intl'

export async function generateMetadata({
	params
}: {
	params: Promise<{ locale: string }>
}) {
	const { locale } = await params
	const t = await getTranslations({ locale, namespace: 'Metadata' })

	return {
		title: t('title'),
		description: t('description'),
		appleWebApp: {
			title: t('title-small'),
			statusBarStyle: 'default'
		},
		openGraph: {
			title: t('title-small'),
			description: t('description'),
			siteName: t('title-small')
		}
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
	if (!hasLocale(routing.locales, locale)) {
		notFound()
	}

	return (
		<html lang={locale} suppressHydrationWarning>
			<body
				className={`${fonts.roboto.variable} ${fonts.bebasNeue.variable} ${fonts.rockSalt.variable} ${fonts.badScript.variable} ${fonts.alumni.variable} antialiased`}
			>
				<NextIntlClientProvider>{children}</NextIntlClientProvider>
			</body>
		</html>
	)
}
