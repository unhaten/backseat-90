import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'

const intlMiddleware = createMiddleware(routing)

export function middleware(req: NextRequest) {
	const { pathname } = req.nextUrl
	const accessToken = req.cookies.get('access_token')?.value

	// Extract the locale from the URL (e.g., /en, /de, , etc.)
	// TODO: make a feature: get locale language of user's browser
	const localeMatch = pathname.match(/^\/(de|en|ru)(\/|$)/)
	const locale = localeMatch ? localeMatch[1] : null // Locale or null if not found

	// 1️⃣ Handle authentication redirects
	const pathWithoutLocale = localeMatch
		? pathname.replace(/^\/(de|en|ru)/, '')
		: pathname

	if (accessToken && pathWithoutLocale.startsWith('/auth')) {
		return NextResponse.redirect(new URL(`/${locale || 'en'}/`, req.url)) // Redirect to localized homepage
	}

	// 2️⃣ Redirect unsupported locales (like /fr) to default `/en`
	if (locale && !routing.locales.includes(locale as 'en' | 'de' | 'ru')) {
		const newUrl = new URL(
			`/en${pathname.substring(locale.length + 1)}`,
			req.url
		)
		return NextResponse.redirect(newUrl)
	}

	// 3️⃣ Handle unsupported paths (like /fr) without locale
	if (!locale) {
		const newUrl = new URL(`/en${pathname}`, req.url) // Redirect to /en
		return NextResponse.redirect(newUrl)
	}

	// 4️⃣ Run `next-intl` middleware for valid locales
	return intlMiddleware(req)
}

export const config = {
	// Match internationalized routes and auth routes
	matcher: ['/', '/(de|en|ru)/:path*', '/auth/:path*']
}
