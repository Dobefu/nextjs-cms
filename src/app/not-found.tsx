import PageTitle from '@/components/molecules/PageTitle/Component'

export default function NotFound() {
  return (
    <main
      className="p-8 max-md:p-4"
      id="main"
    >
      <PageTitle
        className="mb-8 max-md:mb-4"
      >
        Not found
      </PageTitle>

      <p>This page could not be found.</p>
    </main>
  )
}
