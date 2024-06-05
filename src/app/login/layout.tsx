import type { Metadata } from 'next'

import BaseImage from '@/components/base/BaseImage/Component'

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
      className="flex flex-1 gap-8"
    >
      <div
        className="flex-1 p-2"
      >
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
