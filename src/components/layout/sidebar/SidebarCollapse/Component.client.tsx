'use client'

import { Icon } from '@iconify/react'
import chevronRightIcon from '@iconify/icons-mdi/chevron-right'
import chevronLeftIcon from '@iconify/icons-mdi/chevron-left'
import { useCookies } from 'react-cookie'
import Button from '@/components/ui/Button/Component'

interface SidebarCollapseProps {
  isOpenInitial: boolean
}

export default function Client({ isOpenInitial }: SidebarCollapseProps) {
  const [cookies, setCookie] = useCookies(['sidebar-open'])

  const toggleOpenState = () => {
    setCookie('sidebar-open', !(cookies['sidebar-open'] ?? true), {
      path: '/',
      expires: new Date(Date.now() + 31536000_000), // 1 year
    })
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleOpenState}
    >
      <Icon
        className="size-[1.2rem]"
        icon={(cookies['sidebar-open'] ?? isOpenInitial) ? chevronLeftIcon : chevronRightIcon}
        ssr
      />
    </Button>
  )
}
