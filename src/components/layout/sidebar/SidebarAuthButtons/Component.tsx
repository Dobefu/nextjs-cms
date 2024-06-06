import { auth, signOut } from '@/auth'
import BaseButton from '@/components/base/BaseButton/Component'

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

  return (
    <>
      {session?.user
        ? (
          <form
            action={logout}
            className="flex justify-center"
          >
            <BaseButton type="submit">
              Log out
            </BaseButton>
          </form>
          )
        : (
          <BaseButton
            href="/login"
          >
            CTA
          </BaseButton>
          )}
      {children}
    </>
  )
}
