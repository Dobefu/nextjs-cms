import type { Metadata } from 'next'

import SidebarBase from '@/components/layout/sidebar/SidebarBase/Component'
import SidebarAuthButtons from '@/components/layout/sidebar/SidebarAuthButtons/Component'
import { ThemeToggle } from '@/components/layout/ThemeToggle/Component.client'
import SidebarCollapse from '@/components/layout/sidebar/SidebarCollapse/Component'

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
      className="flex flex-1 bg-background"
    >
      <SidebarBase>
        <div
          className="flex flex-wrap justify-between gap-4"
        >
          <SidebarAuthButtons />
          <ThemeToggle />
          <SidebarCollapse />
        </div>
      </SidebarBase>

      <main
        className="flex flex-1 p-2 ps-0"
      >
        <div
          className="flex flex-1 rounded-lg border bg-card p-4 shadow-lg"
        >
          {children}
        </div>
      </main>
    </div>
  )
}
