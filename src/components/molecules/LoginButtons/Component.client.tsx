'use client'

import { Icon } from '@iconify/react'
import githubIcon from '@iconify/icons-mdi/github'
import Button from '@/components/ui/Button/Component.client'

interface LoginButtonProps {
  onLogin: (provider: string, data: FormData) => void
}

export default function Client({ onLogin }: LoginButtonProps) {
  return (
    <Button
      onClick={() => onLogin('github', new FormData())}
    >
      <Icon
        className="me-2 size-4"
        icon={githubIcon}
        ssr
      />
      Log in with GitHub
    </Button>
  )
}
