import { ThemeToggle } from '../../ThemeToggle/Component.client'
import SidebarAuthButtons from '../SidebarAuthButtons/Component'

interface SidebarBaseProps {
  children?: React.ReactNode
}

export default async function SidebarBase({ children }: SidebarBaseProps) {
  return (
    <div
      className="flex min-w-64 flex-col p-6"
    >
      <div
        className="flex-1"
      >
        SIDEBAR

        {children}
      </div>

      <div
        className="flex justify-between"
      >
        <SidebarAuthButtons />
        <ThemeToggle />
      </div>
    </div>
  )
}
