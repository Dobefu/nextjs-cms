/* eslint-disable unicorn/prefer-node-protocol */

import { Buffer } from 'buffer'
import process from 'process'
import { type NextRequest, NextResponse } from 'next/server'
import { auth } from '@/auth'

export default auth((req) => {
  if (
    !req.auth
    && req.nextUrl.pathname !== '/login'
    && req.nextUrl.pathname !== '/'
  ) {
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

  const response = getCspResponse(req)

  return response
})

function getCspResponse(req: NextRequest) {
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64')

  const isDev = (process.env.NODE_ENV === 'development')
  const scriptEval = isDev ? '\'unsafe-eval\'' : ''

  // The hashes and the 'unsafe-inline' in the CSP should no longer be
  // needed at all once the next update of next-themes comes out.
  const cspHeader = `
    default-src 'self';
    script-src 'self' 'nonce-${nonce}' 'strict-dynamic' 'sha256-eMuh8xiwcX72rRYNAGENurQBAcH7kLlAUQcoOri3BIo=' ${scriptEval};
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data: https://avatars.githubusercontent.com;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
`

  const contentSecurityPolicyHeaderValue = cspHeader
    .replace(/\s{2,}/g, ' ')
    .trim()

  const requestHeaders = new Headers(req.headers)
  requestHeaders.set('x-nonce', nonce)

  requestHeaders.set(
    'Content-Security-Policy',
    contentSecurityPolicyHeaderValue,
  )

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })

  response.headers.set(
    'Content-Security-Policy',
    contentSecurityPolicyHeaderValue,
  )

  return response
}

export const config = {
  matcher: [
    {
      source: '/((?!api|_next/static|_next/image|assets|favicon.ico|.*\\.jpg|.*\\.png).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
  ],
}
