import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
	const accessToken = req.cookies.get('access_token')?.value

	if (accessToken && req.nextUrl.pathname.startsWith('/auth')) {
		return NextResponse.redirect(new URL('/', req.url))
	}

	return NextResponse.next()
}

export const config = {
	matcher: ['/auth/:path*']
}
