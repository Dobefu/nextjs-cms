import type { Metadata } from 'next'
import { Urbanist as Font } from 'next/font/google'

import '@/app/globals.css'
import { ThemeProvider } from '@/components/ThemeProvider/Component.client'
import SkipToMain from '@/components/layout/SkipToMain/Component'
import { cn } from '@/lib/utils'

const font = Font({
  subsets: ['latin'],
  display: 'swap',
})

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
      className={cn('h-full text-lg', font.className)}
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
          disableTransitionOnChange
        >
          <SkipToMain />

          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
