'use client'

import { useCookies } from 'react-cookie'
import SidebarMenu from '../SidebarMenu/Component.client'
import { cn } from '@/lib/utils'
import BaseImage from '@/components/ui/Image/Component'

interface SidebarBaseProps {
  children?: React.ReactNode
  isOpenInitial: boolean
}

export default function Client({ children, isOpenInitial }: SidebarBaseProps) {
  const [cookies] = useCookies(['sidebar-open'])

  return (
    <div
      className={cn(
        'flex flex-col transition-all overflow-hidden gap-8 max-lg:w-20 shrink-0 max-md:w-16',
        (cookies['sidebar-open'] ?? isOpenInitial) ? 'w-72' : 'w-20',
      )}
    >
      <div
        className="flex flex-1 flex-col gap-4 overflow-y-auto overflow-x-hidden p-4 max-md:p-2"
      >
        <h1
          className={cn(
            'flex items-center gap-4 text-xl font-semibold text-foreground max-lg:p-2',
            (cookies['sidebar-open'] ?? isOpenInitial) ? 'p-4' : 'p-2',
          )}
        >
          <BaseImage
            className="max-w-8 max-lg:size-full"
            src="/logo.svg"
            alt="Logo"
            height={32}
            width={32}
            priority
          />

          <span
            className={cn(
              'max-lg:sr-only',
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
