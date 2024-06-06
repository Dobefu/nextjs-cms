import HeaderAuthButtons from '@/components/layout/header/HeaderAuthButtons/Component'

interface HeaderBaseProps {
  children?: React.ReactNode
}

export default function HeaderBase({ children }: HeaderBaseProps) {
  return (
    <header
      className="flex items-center justify-between p-4"
    >
      <h1>HEADER</h1>

      <HeaderAuthButtons />
      {children}
    </header>
  )
}
