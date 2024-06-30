'use client'

import { AnimatePresence, Reorder } from 'framer-motion'
import ComponentAddButton from '../ComponentAdd/Component.client'

interface FieldOverviewProps {
  fields: React.FC[]
  onFieldInsert: (
    index: number,
    component: React.FC,
  ) => void
  onFieldReorder: (fields: React.FC[]) => void
}

export default function FieldOverview({ fields, onFieldInsert, onFieldReorder }: FieldOverviewProps) {
  const onComponentAdd = (component: React.FC, index: number) => {
    onFieldInsert(index, component)
  }

  return (
    <>
      <ComponentAddButton
        index={0}
        onAdd={(onComponentAdd)}
      />

      <AnimatePresence>
        <Reorder.Group axis="y" values={fields} onReorder={onFieldReorder}>
          {fields.map((Field, index) => (
            <Reorder.Item
              key={index}
              value={index}
              dragListener={false}
            >
              <p>{Field.displayName}</p>

              <Field />

              <ComponentAddButton
                index={index + 1}
                onAdd={(onComponentAdd)}
              />
            </Reorder.Item>
          ))}
        </Reorder.Group>
      </AnimatePresence>
    </>
  )
}
