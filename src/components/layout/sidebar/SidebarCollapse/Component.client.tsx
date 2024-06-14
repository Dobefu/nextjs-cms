'use client'

import { Icon } from '@iconify/react'
import chevronRightIcon from '@iconify/icons-mdi/chevron-right'
import chevronLeftIcon from '@iconify/icons-mdi/chevron-left'
import { useCookies } from 'react-cookie'
import { useEffect, useState } from 'react'
import Button from '@/components/ui/Button/Component.client'

interface SidebarCollapseProps {
  isOpenInitial: boolean
}

export default function Client({ isOpenInitial }: SidebarCollapseProps) {
  const [cookies, setCookie] = useCookies(['sidebar-open'])
  const [sidebarOpen, setSidebarOpen] = useState(cookies['sidebar-open'] ?? isOpenInitial)

  useEffect(() => {
    setSidebarOpen((cookies['sidebar-open'] ?? isOpenInitial))
  }, [cookies, isOpenInitial])

  const toggleOpenState = () => {
    setCookie('sidebar-open', !(cookies['sidebar-open'] ?? true), {
      path: '/',
      expires: new Date(Date.now() + 31536000_000), // 1 year
    })
  }

  return (
    <Button
      className="max-lg:hidden"
      variant="outline"
      size="icon"
      onClick={toggleOpenState}
      aria-label={sidebarOpen ? 'Collapse menu' : 'Expand menu'}
    >
      <Icon
        className="size-[1.2rem]"
        icon={sidebarOpen ? chevronLeftIcon : chevronRightIcon}
        ssr
      />
    </Button>
  )
}
