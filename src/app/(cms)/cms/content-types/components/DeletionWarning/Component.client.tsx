'use client'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import deleteContentType from '../../actions/delete-content-type'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/Form/Component'
import { Input } from '@/components/ui/Input/Component.client'
import Button from '@/components/ui/Button/Component.client'
import { toast } from '@/hooks/useToast'

interface DeletionWarningProps {
  id: number
  title: string
  onSubmit: () => void
}

export default function DeletionWarning({ id, title, onSubmit }: DeletionWarningProps) {
  const router = useRouter()

  const formSchema = z.object({
    title: z.literal(title, {
      message: 'Please enter the exact name of the content type',
    }),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
    },
  })

  async function onFormSubmit() {
    const result = await deleteContentType(id)

    const toastData: {
      title: string
      variant?: 'destructive' | 'default'
    } = {
      title: '',
    }

    if (result.success) {
      toastData.title = 'The content type has been deleted!'
    }
    else {
      toastData.title = 'Could not delete the content type'
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
        If you are sure you want to delete this content type,
        please type
        {' '}
        <span
          className="whitespace-pre rounded-sm border bg-muted px-2 py-1 font-mono font-bold text-muted-foreground"
        >
          {title}
        </span>
        {' '}
        below.
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onFormSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            variant="destructive"
          >
            Delete
          </Button>
        </form>
      </Form>
    </>
  )
}
