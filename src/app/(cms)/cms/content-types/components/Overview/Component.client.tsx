'use client'

import dotsVerticalIcon from '@iconify/icons-mdi/dots-vertical'
import { Icon } from '@iconify/react'
import type { ColumnDef, RowData, SortingColumn } from '@tanstack/react-table'
import sortIcon from '@iconify/icons-mdi/sort'
import Button from '@/components/ui/Button/Component.client'

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/DropdownMenu/Component.client'
import { DataTable } from '@/components/ui/DataTable/Component.client'

interface ContentTypes {
  id: string
  title: string
  lastmod: string
}

interface OverviewProps {
  contentTypes: ContentTypes[]
}

export default function Client({ contentTypes }: OverviewProps) {
  const columns: ColumnDef<ContentTypes, RowData>[] = [
    {
      accessorKey: 'title',
      header: ({ column }: { column: SortingColumn<ContentTypes> }) => {
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
              className="ml-2 size-4"
              ssr
            />
          </Button>
        )
      },
    },
    {
      accessorKey: 'lastmod',
      header: ({ column }: { column: SortingColumn<ContentTypes> }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
            className="-mx-3 max-md:-mx-2 max-md:h-full max-md:rounded-none max-md:px-2"
            size="sm"
          >
            Last Modified

            <Icon
              icon={sortIcon}
              className="ml-2 size-4"
              ssr
            />
          </Button>
        )
      },
    },
    {
      id: 'actions',
      cell: ({ row: _row }: { row: RowData }) => {
        return (
          <div
            className="text-right"
          >
            <DropdownMenu>
              <DropdownMenuTrigger
                asChild
              >
                <Button
                  variant="ghost"
                  className="size-8 p-0"
                >
                  <span className="sr-only">Open menu</span>
                  <Icon
                    className="size-4"
                    icon={dotsVerticalIcon}
                    ssr
                  />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  Edit content type
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Delete content type
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
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
    />
  )
}
