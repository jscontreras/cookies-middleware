import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  console.log('request.cookies', request.cookies.getAll())
  const response = NextResponse.next();
  const url = request.nextUrl;
  const ga_platform = url.searchParams.get('ga_platform') || 'desktop';
  // Setting a cookie on the response
  if (ga_platform === 'mobile') {
    response.cookies.set('device', 'mobile', {
      path: '/',
      // You can add other cookie attributes here such as 'expires', 'secure', etc.
    });
  } else {
    response.cookies.set('device', 'desktop', {
      path: '/',
      // You can add other cookie attributes here such as 'expires', 'secure', etc.
    });
  }

  return response;
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
  ],
}