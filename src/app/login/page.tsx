import { Icon } from '@iconify/react'
import { signIn } from '@/auth'
import BaseButton from '@/components/base/BaseButton/Component'

export default async function Login() {
  const login = async (formData: FormData) => {
    'use server'
    await signIn('github', formData)
  }

  return (
    <main
      className="w-full"
    >
      <form
        action={login}
        className="flex justify-center"
      >
        <BaseButton
          type="submit"
        >
          <Icon icon="mdi:github" />
          Log in with GitHub
        </BaseButton>
      </form>
    </main>
  )
}
