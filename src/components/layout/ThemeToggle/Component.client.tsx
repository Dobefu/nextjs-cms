'use client'

import * as React from 'react'
import { useTheme } from 'next-themes'
import { Icon } from '@iconify/react'
import sunIcon from '@iconify/icons-mdi/white-balance-sunny'
import moonIcon from '@iconify/icons-mdi/moon-and-stars'
import Button from '@/components/ui/Button/Component'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/DropdownMenu/Component.client'

interface ThemeToggleProps {
  align?: 'start' | 'center' | 'end'
}

export function ThemeToggle({ align }: ThemeToggleProps) {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <Button
        variant="outline"
        size="icon"
        asChild
      >
        <DropdownMenuTrigger>
          <Icon
            className="size-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
            icon={sunIcon}
            ssr
          />

          <Icon
            className="absolute size-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
            icon={moonIcon}
            ssr
          />

          <span className="sr-only">Toggle theme</span>
        </DropdownMenuTrigger>
      </Button>
      <DropdownMenuContent align={align}>
        <DropdownMenuItem onClick={() => setTheme('light')}>
          <Icon
            className="me-2 size-[1.2rem]"
            icon={sunIcon}
            ssr
          />

          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          <Icon
            className="me-2 size-[1.2rem]"
            icon={moonIcon}
            ssr
          />

          Dark
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
