'use client'

import clsx from 'clsx'

interface BaseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
  href?: string
}

export default function Client({ children, className, type, name, value, disabled, href }: BaseButtonProps) {
  const Button = href ? 'a' : 'button'

  return (
    <Button
      className={clsx(
        'inline-flex h-11 items-center justify-center gap-2 whitespace-nowrap rounded-md bg-sky-500 px-8 text-sm font-medium text-white transition-colors hover:bg-sky-500/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
        className,
      )}
      type={type}
      name={name}
      value={value}
      disabled={disabled}
      href={href}
    >
      {children}
    </Button>
  )
}
