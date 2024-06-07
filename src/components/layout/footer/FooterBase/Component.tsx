import Client from './Component.client'

interface FooterBaseProps {
  children?: React.ReactNode
}

export default function FooterBase({ children }: FooterBaseProps) {
  return (
    <Client>
      {children}
    </Client>
  )
}
