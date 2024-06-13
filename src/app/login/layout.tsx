import type { Metadata } from 'next'
import chevronLeftIcon from '@iconify/icons-mdi/chevron-left'

import Link from 'next/link'
import { Icon } from '@iconify/react/dist/iconify.js'
import BaseImage from '@/components/ui/Image/Component'

export const metadata: Metadata = {
  title: 'Login | NextJS CMS',
  description: '',
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main
      className="flex flex-1 gap-4 p-4"
      id="main"
    >

      <Link
        className="absolute z-10 flex items-center gap-3 p-4"
        href="/"
      >
        <Icon
          className="size-4"
          icon={chevronLeftIcon}
          ssr
        />

        Home
      </Link>

      <div
        className="relative flex-1 max-md:hidden"
      >
        <div
          className="absolute inset-0 h-20 bg-gradient-to-b from-black/50 to-transparent"
        />

        <BaseImage
          className="size-full rounded-lg object-cover"
          alt="Login image"
          src="/LAMP.jpg"
          width={1128}
          height={729}
          priority
        />
      </div>

      <div
        className="flex flex-1 items-center"
      >
        {children}
      </div>
    </main>
  )
}
