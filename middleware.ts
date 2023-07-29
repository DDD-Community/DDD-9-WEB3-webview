import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'


export function middleware(request: NextRequest) {
  console.log('middleware')
  const requestHeaders = new Headers(request.headers)
  const isToken = request.cookies.has('token');

  console.log(1, request.nextUrl.pathname, isToken)
  if (request.nextUrl.pathname === '/') {
    if (isToken) {
      return NextResponse.redirect(new URL('/community', request.url))
    } else {
      return NextResponse.redirect(new URL('/login', request.url))
    }
  } else if (request.nextUrl.pathname === '/login' && isToken) {
    console.log('use token login')
    // main
  }


  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })

  return response
}

export const config = {
  matcher: ['/', '/login/:path*'],
}
