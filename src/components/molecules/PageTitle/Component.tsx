interface PageTitleProps {
  children: React.ReactNode
}

export default function PageTitle({ children }: PageTitleProps) {
  return (
    <h2
      className="pb-8 text-4xl font-semibold"
    >
      {children}
    </h2>
  )
}
