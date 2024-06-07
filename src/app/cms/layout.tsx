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
      className="flex flex-1 bg-accent"
    >
      <SidebarBase />

      <main
        className="flex flex-1 p-2"
      >
        <div
          className="flex flex-1 rounded-lg bg-background p-4 shadow-lg"
        >
          {children}
        </div>
      </main>
    </div>
  )
}
