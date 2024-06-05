import type { Metadata } from 'next'

import '@/app/globals.css'

export const metadata: Metadata = {
  title: 'NextJS CMS',
  description: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      className="h-full"
      dir="ltr"
      lang="en"
    >
      <body
        className="flex min-h-full flex-col"
      >
        {children}
      </body>
    </html>
  )
}
