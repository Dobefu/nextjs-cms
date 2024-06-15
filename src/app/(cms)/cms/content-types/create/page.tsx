import EditForm from '../components/EditForm/Component.client'
import PageTitle from '@/components/molecules/PageTitle/Component'

export default function Create() {
  return (
    <>
      <PageTitle>Create a Content Type</PageTitle>

      <EditForm
        action="create"
      />
    </>
  )
}
