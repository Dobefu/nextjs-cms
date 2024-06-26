'use client'

import dotsVerticalIcon from '@iconify/icons-mdi/dots-vertical'
import { Icon } from '@iconify/react'
import type { ColumnDef, RowData, SortingColumn } from '@tanstack/react-table'
import sortIcon from '@iconify/icons-mdi/sort'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import DeletionWarning from '../DeletionWarning/Component.client'
import Button from '@/components/ui/Button/Component.client'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/DropdownMenu/Component.client'
import { DataTable } from '@/components/ui/DataTable/Component.client'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/Dialog/Component.client'

interface ContentType {
  id: number
  title: string
  lastmod: number
}

interface OverviewProps {
  contentTypes: ContentType[]
}

export default function Client({ contentTypes }: OverviewProps) {
  const [isClient, setIsClient] = useState(false)
  const [isOpen, setOpen] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const columns: ColumnDef<ContentType, RowData>[] = [
    {
      accessorKey: 'title',
      header: ({ column }: { column: SortingColumn<ContentType> }) => {
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
    },
    {
      id: 'lastmod',
      accessorKey: 'lastmod',
      header: ({ column }: { column: SortingColumn<ContentType> }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
            className="-mx-3 max-md:-mx-2 max-md:h-full max-md:rounded-none max-md:px-2 max-sm:hidden"
            size="sm"
          >
            Last Modified

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
          <span
            className="max-sm:hidden"
          >
            {isClient ? new Date(row.getValue('lastmod')).toLocaleString() : ''}
          </span>
        )
      },
    },
    {
      id: 'actions',
      cell: ({ row }) => {
        return (
          <div
            className="text-end"
          >
            <Dialog open={isOpen} onOpenChange={setOpen}>
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

                  <DropdownMenuItem asChild>
                    <Link
                      href={`/cms/content-types/edit/${row.original.id}`}
                      className="cursor-pointer"
                    >
                      Edit content type
                    </Link>
                  </DropdownMenuItem>

                  <DialogTrigger asChild>
                    <DropdownMenuItem>
                      Delete content type
                    </DropdownMenuItem>
                  </DialogTrigger>
                </DropdownMenuContent>
              </DropdownMenu>

              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Are you sure you want to delete this content type?</DialogTitle>
                  <DialogDescription asChild>
                    <DeletionWarning
                      id={row.original.id}
                      title={row.original.title}
                      onSubmit={() => setOpen(false)}
                    />
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
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
      noResultsText="No content types yet."
    />
  )
}
