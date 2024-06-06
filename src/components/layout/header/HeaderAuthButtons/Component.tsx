import { auth, signOut } from '@/auth'
import BaseButton from '@/components/base/BaseButton/Component'

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
    <nav>
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
    </nav>
  )
}
