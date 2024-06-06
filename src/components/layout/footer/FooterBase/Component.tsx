interface FooterBaseProps {
  children?: React.ReactNode
}

export default function FooterBase({ children }: FooterBaseProps) {
  return (
    <footer
      className="flex items-center justify-between p-4"
    >
      <h1>FOOTER</h1>

      {children}
    </footer>
  )
}
