import type { Metadata } from 'next'
import { Inter as Font } from 'next/font/google'

import '@/app/globals.css'
import { ThemeProvider } from 'next-themes'
import SkipToMain from '@/components/layout/SkipToMain/Component'
import { cn } from '@/lib/utils'
import { Toaster } from '@/components/ui/Toaster/Component.client'

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
        className="flex min-h-full flex-col antialiased"
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
        >
          <div
            className="flex min-h-full flex-1 flex-col gap-4"
          >
            <SkipToMain />

            {children}
          </div>

          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
