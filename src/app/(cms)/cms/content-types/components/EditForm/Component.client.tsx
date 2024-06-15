'use client'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import upsertContentType from '../../actions/upsert-content-type'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/Form/Component'
import { Input } from '@/components/ui/Input/Component.client'
import Button from '@/components/ui/Button/Component.client'

interface EditFormProps {
  id?: number
  action: 'create' | 'edit'
}

const formSchema = z.object({
  title: z.string().min(1, {
    message: 'The title is required.',
  }).min(3, {
    message: 'The title must be at least 3 characters.',
  }).max(64, {
    message: 'The title may not be longer than 64 characters.',
  }).trim(),
})

export type EditFormSchema = z.infer<typeof formSchema>

export default function EditForm({ id, action }: EditFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await upsertContentType(values, id)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-8 max-md:gap-4"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel required>Title</FormLabel>

              <FormControl>
                <Input
                  placeholder="Basic page"
                  required
                  {...field}
                />
              </FormControl>
              <FormDescription>
                The title of the content type.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          className="sm:mr-auto"
          type="submit"
        >
          {action === 'create' ? 'Create' : undefined}
          {action === 'edit' ? 'Update' : undefined}
        </Button>
      </form>
    </Form>
  )
}
