import { cn } from '@/lib/utils'

interface PageTitleProps {
  children: React.ReactNode
  className?: string
}

export default function PageTitle({ children, className }: PageTitleProps) {
  return (
    <h2
      className={cn(
        'pb-8 text-4xl font-semibold',
        className,
      )}
    >
      {children}
    </h2>
  )
}
