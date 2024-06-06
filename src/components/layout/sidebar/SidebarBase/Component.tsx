import SidebarAuthButtons from '../SidebarAuthButtons/Component'

interface SidebarBaseProps {
  children?: React.ReactNode
}

export default async function SidebarBase({ children }: SidebarBaseProps) {
  return (
    <div
      className="bg-zinc-300 p-4"
    >
      SIDEBAR

      {children}

      <SidebarAuthButtons />
    </div>
  )
}
