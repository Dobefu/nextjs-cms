'use client'

import { useCookies } from 'react-cookie'
import Image from 'next/image'
import SidebarMenu from '../SidebarMenu/Component.client'
import { cn } from '@/lib/utils'

interface SidebarBaseProps {
  children?: React.ReactNode
  isOpenInitial: boolean
}

export default function Client({ children, isOpenInitial }: SidebarBaseProps) {
  const [cookies] = useCookies(['sidebar-open'])

  return (
    <div
      className={cn(
        'flex flex-col transition-all overflow-hidden p-4',
        (cookies['sidebar-open'] ?? isOpenInitial) ? 'w-80' : 'w-20',
      )}
    >
      <div
        className="flex flex-1 flex-col gap-4"
      >
        <h1
          className={cn(
            'flex items-center gap-4 text-xl font-semibold text-foreground',
            (cookies['sidebar-open'] ?? isOpenInitial) ? 'p-4' : 'p-2',
          )}
        >
          <Image
            src="/logo.svg"
            alt="Logo"
            height={32}
            width={32}
            priority
          />

          <span
            className={cn(
              (cookies['sidebar-open'] ?? isOpenInitial) ? '' : 'sr-only',
            )}
          >
            NextJS CMS
          </span>
        </h1>

        <SidebarMenu
          isExpanded={(cookies['sidebar-open'] ?? isOpenInitial)}
        />
      </div>

      {children}
    </div>
  )
}
