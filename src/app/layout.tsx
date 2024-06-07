import type { Metadata } from 'next'

import '@/app/globals.css'
import { ThemeProvider } from '@/components/ThemeProvider/Component.client'

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
      suppressHydrationWarning
    >
      <body
        className="flex min-h-full flex-col gap-4"
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
