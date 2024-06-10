'use client'

import { Icon } from '@iconify/react'
import Link from 'next/link'
import documentIcon from '@iconify/icons-mdi/book-open-page-variant'
import dashboardIcon from '@iconify/icons-mdi/view-dashboard'
import chevronRightIcon from '@iconify/icons-mdi/chevron-right'
import cogIcon from '@iconify/icons-mdi/cog'
import imageIcon from '@iconify/icons-mdi/folder-image'
import { cn } from '@/lib/utils'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/Tooltip/Component.client'

interface SidebarMenuProps {
  isExpanded: boolean
}

export default function Client({ isExpanded }: SidebarMenuProps) {
  const menuItems = [
    {
      title: 'Dashboard',
      url: '/cms',
      icon: dashboardIcon,
    },
    {
      title: 'Content',
      url: '/cms/content',
      icon: documentIcon,
    },
    {
      title: 'Assets',
      url: '/cms/assets',
      icon: imageIcon,
    },
    {
      title: 'Settings',
      url: '/cms/settings',
      icon: cogIcon,
    },
  ]

  const Comp = isExpanded ? 'span' : TooltipTrigger

  return (
    <div
      className="flex flex-col gap-4"
    >
      <TooltipProvider>
        {menuItems.map(menuItem => (
          <Tooltip
            key={menuItem.title}
          >
            <Comp>
              <Link
                className={cn(
                  'group flex items-center gap-4 rounded-md text-lg hover:bg-accent transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background',
                  isExpanded ? 'p-4' : 'p-3',
                )}
                href={menuItem.url}
              >
                <Icon
                  className={cn(
                    'shrink-0 transition-all group-hover:-rotate-6 group-hover:scale-125',
                    isExpanded ? 'size-5' : 'size-6',
                  )}
                  icon={menuItem.icon}
                  ssr
                />

                <span
                  className={cn(
                    'flex-1 font-medium',
                    isExpanded ? '' : 'sr-only',
                  )}
                >
                  {menuItem.title}
                </span>

                {isExpanded
                  ? (
                    <Icon
                      className="size-[1.2rem] shrink-0 transition-transform group-hover:translate-x-1"
                      icon={chevronRightIcon}
                      ssr
                    />
                    )
                  : undefined}
              </Link>
            </Comp>
            <TooltipContent>
              <span>{menuItem.title}</span>
            </TooltipContent>
          </Tooltip>
        ))}
      </TooltipProvider>
    </div>
  )
}
