'use client'

import * as React from 'react'
import { useTheme } from 'next-themes'
import { Icon } from '@iconify/react'
import sunIcon from '@iconify/icons-mdi/white-balance-sunny'
import moonIcon from '@iconify/icons-mdi/moon-and-stars'
import Button from '@/components/ui/Button/Component.client'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/DropdownMenu/Component.client'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/Tooltip/Component.client'

interface ThemeToggleProps {
  align?: 'start' | 'center' | 'end'
}

export function ThemeToggle({ align }: ThemeToggleProps) {
  const { setTheme } = useTheme()

  return (
    <TooltipProvider>
      <Tooltip>
        <DropdownMenu>
          <Button
            variant="outline"
            size="icon"
            asChild
          >
            <TooltipTrigger
              asChild
            >
              <DropdownMenuTrigger>
                <Icon
                  className="size-[1.2rem] rotate-0 scale-100 text-amber-500 transition-all dark:-rotate-90 dark:scale-0"
                  icon={sunIcon}
                  ssr
                />

                <Icon
                  className="absolute size-[1.2rem] rotate-90 scale-0 text-slate-600 transition-all dark:rotate-0 dark:scale-100 dark:text-slate-400"
                  icon={moonIcon}
                  ssr
                />

                <span className="sr-only">Toggle theme</span>
              </DropdownMenuTrigger>
            </TooltipTrigger>
          </Button>
          <DropdownMenuContent align={align}>
            <DropdownMenuItem
              onClick={() => setTheme('light')}
              className="cursor-pointer"
            >
              <Icon
                className="me-2 size-[1.2rem] text-amber-500"
                icon={sunIcon}
                ssr
              />

              Light
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => setTheme('dark')}
              className="cursor-pointer"
            >
              <Icon
                className="me-2 size-[1.2rem] text-slate-600 dark:text-slate-400"
                icon={moonIcon}
                ssr
              />

              Dark
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <TooltipContent>Light/dark mode</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
