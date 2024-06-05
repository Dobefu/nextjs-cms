import type { Metadata } from 'next'

import HeaderBase from '@/components/layout/header/HeaderBase/Component'

export const metadata: Metadata = {
  title: 'NextJS CMS',
  description: '',
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <HeaderBase />

      {children}
    </>
  )
}
