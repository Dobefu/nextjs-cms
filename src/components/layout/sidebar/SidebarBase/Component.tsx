interface SidebarBaseProps {
  children?: React.Component
}

export default function SidebarBase({ children }: SidebarBaseProps) {
  return (
    <>
      SIDEBAR
      {children}
    </>
  )
}
