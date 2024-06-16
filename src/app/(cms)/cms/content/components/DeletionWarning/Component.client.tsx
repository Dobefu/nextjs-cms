'use client'

import { useRouter } from 'next/navigation'
import deleteContent from '../../actions/delete-content'
import Button from '@/components/ui/Button/Component.client'
import { toast } from '@/hooks/useToast'
import { DialogClose } from '@/components/ui/Dialog/Component.client'

interface DeletionWarningProps {
  id: number
  onSubmit: () => void
}

export default function DeletionWarning({ id, onSubmit }: DeletionWarningProps) {
  const router = useRouter()

  async function onFormSubmit() {
    const result = await deleteContent(id)

    const toastData: {
      title: string
      variant?: 'destructive' | 'default'
    } = {
      title: '',
    }

    if (result.success) {
      toastData.title = 'The content entity has been deleted!'
    }
    else {
      toastData.title = 'Could not delete the content entity'
      toastData.variant = 'destructive'
    }

    toast({
      ...toastData,
    })

    if (result.success) {
      router.refresh()
      onSubmit()
    }
  }

  return (
    <>
      <p
        className="py-4"
      >
        This action is not reversible!
      </p>

      <form onSubmit={onFormSubmit} className="space-y-8">
        <div
          className="flex justify-between"
        >
          <Button
            type="submit"
            variant="destructive"
          >
            Delete
          </Button>

          <DialogClose
            asChild
          >
            <Button
              type="button"
              variant="outline"
              autoFocus
            >
              Cancel
            </Button>
          </DialogClose>
        </div>
      </form>
    </>
  )
}
