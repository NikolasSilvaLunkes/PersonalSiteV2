import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'


export function middleware(request: NextRequest) {  
  if (new RegExp(/^.*(fonts|_next|vk.com|favicon).*$/).test(request.url)) {
    return NextResponse.next()
  } 
  
  const url = request.nextUrl.clone()  
  if (url.pathname === '/english') {
    url.pathname = '/'
    const response = NextResponse.redirect(url)
    response.cookies.set('language', 'english')
    return response
  } else if (url.pathname === '/portuguese') {
    url.pathname = '/'
    const response = NextResponse.redirect(url)
    response.cookies.set('language', 'portuguese')
    return response
  } else if (url.pathname === '/language' && request.cookies.get('language') !== undefined) {
    url.pathname = '/'
    const response = NextResponse.redirect(url)
    return response
  } else if (request.cookies.get('language') === undefined && url.pathname !== '/language') {
    url.pathname = '/language'
    return NextResponse.redirect(url) 
  }

  return NextResponse.next()
}


export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
    '/'
  ],
}