import {NextRequest, NextResponse, userAgent} from 'next/server'

export function middleware(request: NextRequest) {
    const {ua} = userAgent(request);
    if (request.nextUrl.pathname.startsWith('/home')) {
        if (ua.includes('iPhone') || ua.includes('Android')) {
            return NextResponse.redirect(new URL('/m/home', request.url))
        }
    }
}