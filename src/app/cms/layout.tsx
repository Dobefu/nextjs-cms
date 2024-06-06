import type { Metadata } from 'next'

import SidebarBase from '@/components/layout/sidebar/SidebarBase/Component'

export const metadata: Metadata = {
  title: 'CMS | NextJS CMS',
  description: '',
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div
      className="flex flex-1"
    >
      <SidebarBase />

      {children}
    </div>
  )
}
