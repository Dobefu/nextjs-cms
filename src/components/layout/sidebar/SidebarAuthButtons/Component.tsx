import { Icon } from '@iconify/react'
import logoutIcon from '@iconify/icons-mdi/logout'
import accountIcon from '@iconify/icons-mdi/account'
import Link from 'next/link'
import { auth, signOut } from '@/auth'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/Avatar/Component.client'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/DropdownMenu/Component.client'

interface SidebarAuthButtonsProps {
  children?: React.ReactNode
}

export default async function SidebarAuthButtons({ children }: SidebarAuthButtonsProps) {
  const session = await auth()

  const logout = async () => {
    'use server'

    await signOut({
      redirectTo: '/login',
    })
  }

  const initials = session?.user?.name?.split(' ')
    .filter((_name: string, index: number) => index !== 1)
    .map((name: string) => name[0])
    .join('')

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger
          asChild
        >
          <Avatar
            asChild
          >
            <button
              className="ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              type="button"
            >
              <AvatarImage
                src={session?.user?.image ?? ''}
                alt={session?.user?.name ?? ''}
              />
              <AvatarFallback>{initials}</AvatarFallback>
            </button>
          </Avatar>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          align="start"
        >
          <form
            action={logout}
          >
            <DropdownMenuLabel>
              {session?.user?.name}
            </DropdownMenuLabel>

            <DropdownMenuSeparator />

            <DropdownMenuItem
              asChild
            >
              <Link
                href="/profile"
                className="cursor-pointer"
              >
                <Icon
                  className="me-2 size-4"
                  icon={accountIcon}
                  ssr
                />

                Profile
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem
              asChild
            >
              <button
                className="flex w-full cursor-pointer items-center"
                type="submit"
              >
                <Icon
                  className="me-2 size-4"
                  icon={logoutIcon}
                  ssr
                />

                Log out
              </button>
            </DropdownMenuItem>
          </form>
        </DropdownMenuContent>
      </DropdownMenu>

      {children}
    </>
  )
}
