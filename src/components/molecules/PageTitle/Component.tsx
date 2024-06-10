interface PageTitleProps {
  children: React.ReactNode
}

export default function PageTitle({ children }: PageTitleProps) {
  return (
    <h2
      className="text-4xl font-semibold"
    >
      {children}
    </h2>
  )
}
