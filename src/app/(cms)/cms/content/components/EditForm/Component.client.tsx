'use client'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from 'react'
import saveIcon from '@iconify/icons-mdi/content-save'
import loadingIcon from '@iconify/icons-mdi/loading'
import { Icon } from '@iconify/react'
import { useRouter } from 'next/navigation'
import upsertContent from '../../actions/upsert-content'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/Form/Component'
import { Input } from '@/components/ui/Input/Component.client'
import Button from '@/components/ui/Button/Component.client'
import { cn } from '@/lib/utils'
import { toast } from '@/hooks/useToast'
import { Switch } from '@/components/ui/Switch/Component.client'

interface EditFormProps {
  id?: number
  action: 'create' | 'edit'
  defaultValues?: z.infer<typeof formSchema>
}

const formSchema = z.object({
  title: z.string().min(1, {
    message: 'The title is required.',
  }).min(3, {
    message: 'The title must be at least 3 characters.',
  }).max(64, {
    message: 'The title may not be longer than 64 characters.',
  }).trim(),
  published: z.boolean(),
})

export type EditFormSchema = z.infer<typeof formSchema>

export default function EditForm({ id, action, defaultValues }: EditFormProps) {
  const router = useRouter()

  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      published: false,
      ...defaultValues,
    },
  })

  useEffect(() => {
    form.setFocus('title')
  }, [form])

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)
    const { success, data, error } = await upsertContent(values, id)

    const toastData: {
      title: string
      description?: string
      variant?: 'destructive' | 'default'
    } = {
      title: '',
      description: undefined,
    }

    if (success) {
      if (action === 'create')
        toastData.title = 'The content has been created!'
      if (action === 'edit')
        toastData.title = 'The content has been updated!'
    }
    else {
      if (action === 'create')
        toastData.title = 'Could not create the content'
      if (action === 'edit')
        toastData.title = 'Could not update the content'

      toastData.description = 'Please try again later'
      toastData.variant = 'destructive'

      if (error === 'P2002') {
        toastData.title = 'A content entity with this name already exists'
        toastData.description = ''
      }
    }

    toast(toastData)

    if (action === 'create') {
      setIsLoading(false)

      if (data) {
        router.push(`/cms/content/edit/${data.id}`)
        router.refresh()
      }

      return
    }

    router.refresh()

    // Leave the submit button disabled for a second, to prevent spamming.
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsLoading(false)
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
                  required
                  autoFocus
                  {...field}
                />
              </FormControl>
              <FormDescription>
                The title of the content entity.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <div
          className="flex flex-wrap-reverse items-center gap-8 max-sm:gap-4"
        >
          <Button
            className="max-sm:flex-1"
            type="submit"
            disabled={isLoading}
          >
            <Icon
              className={cn(
                'me-2 size-4',
                isLoading ? 'animate-spin' : '',
              )}
              icon={isLoading ? loadingIcon : saveIcon}
              ssr
            />

            {action === 'create' ? 'Create' : undefined}
            {action === 'edit' ? 'Update' : undefined}
          </Button>

          <FormField
            control={form.control}
            name="published"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div
                    className="flex items-center gap-4"
                  >
                    <Switch
                      id="published"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      {...field}
                      value={field.value ? 'on' : 'off'}
                    />

                    <FormLabel
                      className="cursor-pointer"
                      htmlFor="published"
                    >
                      Published
                    </FormLabel>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </form>
    </Form>
  )
}
