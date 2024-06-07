import { signIn } from '@/auth'
import LoginButtons from '@/components/molecules/LoginButtons/Component'

export default async function Login() {
  const login = async (provider: string, formData: FormData) => {
    'use server'
    await signIn(provider, formData)
  }

  return (
    <main
      className="flex w-full justify-center"
    >
      <LoginButtons
        onLogin={login}
      />
    </main>
  )
}
