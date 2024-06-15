'use client'

import * as React from 'react'
import * as LabelPrimitive from '@radix-ui/react-label'
import { type VariantProps, cva } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const labelVariants = cva(
  'text-sm font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
)

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
  VariantProps<typeof labelVariants> & { required?: boolean }
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants(), className)}
    {...props}
  >
    {props.children}
    {(props.required ?? false)
      ? (
        <span
          className="pl-1 text-destructive"
        >
          *
        </span>
        )
      : undefined}
  </LabelPrimitive.Root>
))

Label.displayName = LabelPrimitive.Root.displayName

export { Label }
