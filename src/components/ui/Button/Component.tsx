import type { ButtonProps } from './Component.client'
import Client from './Component.client'

export default function Button(props: ButtonProps) {
  return (
    <Client
      {...props}
    />
  )
}
