import Client from './Component.client'

interface LoginButtonProps {
  onLogin: (provider: string, data: FormData) => void
}

export default function LoginButtons({ onLogin }: LoginButtonProps) {
  return (
    <Client
      onLogin={onLogin}
    />
  )
}
