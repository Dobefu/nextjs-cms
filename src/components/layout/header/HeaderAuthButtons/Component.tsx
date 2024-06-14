import Link from 'next/link'
import { Icon } from '@iconify/react'
import userIcon from '@iconify/icons-mdi/user-outline'
import logoutIcon from '@iconify/icons-mdi/logout'
import { auth, signOut } from '@/auth'
import Button from '@/components/ui/Button/Component.client'

interface HeaderAuthButtonsProps {
  children?: React.ReactNode
}

export default async function HeaderAuthButtons({ children }: HeaderAuthButtonsProps) {
  const session = await auth()

  const logout = async () => {
    'use server'
    await signOut({
      redirectTo: '/login',
    })
  }

  return (
    <nav
      aria-label="User menu"
    >
      {session?.user
        ? (
          <form
            action={logout}
            className="flex justify-center"
          >
            <Button type="submit">
              <Icon
                className="me-2 size-4"
                icon={logoutIcon}
                ssr
              />
              Log out
            </Button>
          </form>
          )
        : (
          <Button
            asChild
          >
            <Link
              href="/login"
            >
              <Icon
                className="me-2 size-4"
                icon={userIcon}
                ssr
              />
              Log in
            </Link>
          </Button>
          )}

      {children}
    </nav>
  )
}
