'use client'

import { Icon } from '@iconify/react'
import logoutIcon from '@iconify/icons-mdi/logout'
import type { Session } from 'next-auth'
import Button from '@/components/ui/Button/Component'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/Avatar/Component.client'

interface SidebarAuthButtonsProps {
  children?: React.ReactNode
  session: Session
}

export default async function Client({ children, session }: SidebarAuthButtonsProps) {
  const initials = session?.user?.name?.split(' ')
    .filter((_name: string, index: number) => index !== 1)
    .map((name: string) => name[0])
    .join('')

  return (
    <>
      <Button
        type="submit"
        variant="outline"
      >
        <Icon
          className="me-2 size-4"
          icon={logoutIcon}
          ssr
        />
        Log out
      </Button>
      <Avatar>
        <AvatarImage
          src={session?.user?.image ?? ''}
        />
        <AvatarFallback>{initials}</AvatarFallback>
      </Avatar>

      {children}
    </>
  )
}
