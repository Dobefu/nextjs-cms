import { ThemeToggle } from '@/components/layout/ThemeToggle/Component.client'

interface FooterBaseProps {
  children?: React.ReactNode
}

export default function Client({ children }: FooterBaseProps) {
  return (
    <footer
      className="flex items-center justify-between p-4"
    >
      <h1>FOOTER</h1>

      <ThemeToggle />

      {children}
    </footer>
  )
}
