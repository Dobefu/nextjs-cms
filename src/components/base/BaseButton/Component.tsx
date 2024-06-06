import Client from './Component.client'

interface BaseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
  href?: string
}

export default function BaseButton(props: BaseButtonProps) {
  return (
    <Client
      {...props}
    />
  )
}
