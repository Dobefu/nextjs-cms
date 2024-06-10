import type { Metadata } from 'next'

import '@/app/globals.css'
import { ThemeProvider } from '@/components/ThemeProvider/Component.client'
import SkipToMain from '@/components/layout/SkipToMain/Component'

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
        className="flex min-h-full flex-col gap-4 antialiased"
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
        >
          <SkipToMain />

          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
