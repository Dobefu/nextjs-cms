'use client'

import { Icon } from '@iconify/react'
import plusIcon from '@iconify/icons-mdi/plus'
import Text from '../FieldTypes/Text/Component.client'
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/Drawer/Component.client'
import Button from '@/components/ui/Button/Component.client'

interface ComponentAddProps {
  index: number
  onAdd: (
    component: React.FC,
    index: number,
  ) => void
}

export default function ComponentAdd({ index, onAdd }: ComponentAddProps) {
  const fieldTypes = [
    {
      Component: Text,
    },
  ]

  return (
    <Drawer>
      <div
        className="flex items-center gap-4"
      >
        <div className="h-px w-full bg-border" />

        <DrawerTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="mx-auto flex gap-1 bg-transparent"
          >
            <Icon
              className="size-4 shrink-0"
              icon={plusIcon}
              ssr
            />

            Add field
          </Button>
        </DrawerTrigger>

        <div className="h-px w-full bg-border" />
      </div>

      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Add a field</DrawerTitle>
          <DrawerDescription>Please select the field type to add.</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter
          className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1"
        >
          {fieldTypes.map(fieldType => (
            <DrawerClose
              asChild
              key={fieldType.Component.displayName}
            >
              <Button
                onClick={() => onAdd(fieldType.Component, index)}
                variant="link"
                className="border"
              >
                {fieldType.Component.displayName}
              </Button>
            </DrawerClose>
          ))}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
