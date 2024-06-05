interface HeaderBaseProps {
  children?: React.Component
}

export default function HeaderBase({ children }: HeaderBaseProps) {
  return (
    <>
      HEADER
      {children}
    </>
  )
}
