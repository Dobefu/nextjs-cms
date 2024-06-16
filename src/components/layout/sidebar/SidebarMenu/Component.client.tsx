'use client'

import { Icon } from '@iconify/react'
import Link from 'next/link'
import documentIcon from '@iconify/icons-mdi/book-open-page-variant'
import dashboardIcon from '@iconify/icons-mdi/view-dashboard'
import chevronRightIcon from '@iconify/icons-mdi/chevron-right'
import cogIcon from '@iconify/icons-mdi/cog'
import imageIcon from '@iconify/icons-mdi/folder-image'
import contentTypeIcon from '@iconify/icons-mdi/hammer-wrench'
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
      className: '',
    },
    {
      title: 'Content',
      url: '/cms/content',
      icon: documentIcon,
      className: '',
    },
    {
      title: 'Assets',
      url: '/cms/assets',
      icon: imageIcon,
      className: '',
    },
    {
      title: 'Content Types',
      url: '/cms/content-types',
      icon: contentTypeIcon,
      className: '',
    },
    {
      title: 'Settings',
      url: '/cms/settings',
      icon: cogIcon,
      className: '',
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
            <Comp
              tabIndex={-1}
            >
              <Link
                className={cn(
                  'group flex items-center gap-4 rounded-md text-lg hover:bg-accent transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background max-lg:p-3',
                  isExpanded ? 'p-4' : 'p-3',
                )}
                href={menuItem.url}
              >
                <Icon
                  className={cn(
                    'shrink-0 transition-all group-active:rotate-3 group-active:scale-90 group-hover:-rotate-3 group-focus:-rotate-3 group-focus:scale-125 group-hover:scale-125 max-lg:size-6',
                    isExpanded ? 'size-5' : 'size-6',
                    menuItem.className,
                  )}
                  icon={menuItem.icon}
                  ssr
                />

                <span
                  className={cn(
                    'flex-1 font-medium max-lg:sr-only',
                    isExpanded ? '' : 'sr-only',
                  )}
                >
                  {menuItem.title}
                </span>

                {isExpanded
                  ? (
                    <Icon
                      className="size-[1.2rem] shrink-0 transition-transform group-hover:translate-x-1 max-lg:hidden rtl:rotate-180 rtl:group-hover:-translate-x-1"
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
