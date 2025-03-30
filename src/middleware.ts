import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'
import { NextRequest, NextResponse } from 'next/server'

const intlMiddleware = createMiddleware(routing)

export function middleware(request: NextRequest) {
	const response = intlMiddleware(request)
	const { pathname } = request.nextUrl
	const token = request.cookies.get('access_token')?.value

	//! const browserLang =
	// 	request.headers.get('accept-language')?.split(',')[0]?.split('-')[0] ||
	// 	'en'

	//* Regex to match localized auth pages like /en/auth/login, /ru/auth/register
	const authPathRegex = /^\/(en|ru|de)\/auth\/(login|register)/

	//* Redirect unauthenticated users trying to access /dashboard
	if (pathname.startsWith('/dashboard') && !token) {
		return NextResponse.redirect(new URL('/login', request.url))
	}

	//* Redirect authenticated users away from auth pages
	if (token && authPathRegex.test(pathname)) {
		return NextResponse.redirect(new URL('/', request.url))
	}

	return response
}

export const config = {
	matcher: [
		'/dashboard/:path*', // Protect dashboard
		'/(en|ru|de)/auth/:path*', // Handle localized auth pages
		'/((?!api|trpc|_next|_vercel|.*\\..*).*)' // Keep next-intl working
	]
}

export default middleware
