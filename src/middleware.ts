import { auth } from '@/auth'

export default auth((req) => {
  if (!req.auth && req.nextUrl.pathname !== '/login') {
    const newUrl = new URL('/login', req.nextUrl.origin)
    return Response.redirect(newUrl)
  }

  if (
    req.auth && (
      req.nextUrl.pathname === '/login'
      || req.nextUrl.pathname === '/'
    )
  ) {
    return Response.redirect(new URL('/cms', req.nextUrl.origin))
  }
})

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
