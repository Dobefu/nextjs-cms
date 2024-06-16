'use client'

import sortIcon from '@iconify/icons-mdi/sort'
import type { ColumnDef, RowData, SortingColumn } from '@tanstack/react-table'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import Button from '@/components/ui/Button/Component.client'
import { DataTable } from '@/components/ui/DataTable/Component.client'

interface OverviewProps {
  contentTypes: ContentTypeRow[]
}

interface ContentTypeRow {
  id: number
  title: string
}

export default function Overview({ contentTypes }: OverviewProps) {
  const columns: ColumnDef<ContentTypeRow, RowData>[] = [
    {
      accessorKey: 'title',
      header: ({ column }: { column: SortingColumn<ContentTypeRow> }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
            className="-mx-3 max-md:-mx-2 max-md:h-full max-md:rounded-none max-md:px-2"
            size="sm"
          >
            Title

            <Icon
              icon={sortIcon}
              className="ms-2 size-4"
              ssr
            />
          </Button>
        )
      },
      cell: ({ row }) => {
        return (
          <Link
            className="-m-4 block"
            href={`/cms/content/create/${row.original.id}`}
          >
            <div
              className="p-4"
            >
              {row.original.title}
            </div>
          </Link>
        )
      },
    },
  ]

  return (
    <DataTable
      columns={columns}
      data={contentTypes}
      filter={{
        field: 'title',
      }}
      noResultsText={(
        <>
          No content types yet.
          {' '}
          <Link
            className="text-ring underline"
            href="/cms/content-types/create"
          >
            Create one now
          </Link>
        </>
      )}
    />
  )
}
