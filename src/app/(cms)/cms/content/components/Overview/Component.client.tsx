'use client'

import dotsVerticalIcon from '@iconify/icons-mdi/dots-vertical'
import { Icon } from '@iconify/react'
import type { ColumnDef, RowData, SortingColumn } from '@tanstack/react-table'
import sortIcon from '@iconify/icons-mdi/sort'
import checkIcon from '@iconify/icons-mdi/check-bold'
import closeIcon from '@iconify/icons-mdi/close-bold'
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
import { cn } from '@/lib/utils'

interface Content {
  id: number
  published: boolean
  title: string
  lastmod: number
}

interface OverviewProps {
  content: Content[]
}

export default function Client({ content }: OverviewProps) {
  const [isClient, setIsClient] = useState(false)
  const [isOpen, setOpen] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const columns: ColumnDef<Content, RowData>[] = [
    {
      accessorKey: 'title',
      header: ({ column }: { column: SortingColumn<Content> }) => {
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
      header: ({ column }: { column: SortingColumn<Content> }) => {
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
      id: 'published',
      accessorKey: 'published',
      header: () => {
        return (
          <div
            className="text-end"
          >
            Published
          </div>
        )
      },
      cell: ({ row }) => {
        return (
          <Icon
            className={cn(
              'ms-auto',
              row.original.published ? 'text-success' : 'text-destructive',
            )}
            aria-label={row.original.published ? 'Published' : 'Not published'}
            aria-hidden={false}
            icon={row.original.published ? checkIcon : closeIcon}
            ssr
          />
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
                      href={`/cms/content/edit/${row.original.id}`}
                      className="cursor-pointer"
                    >
                      Edit content
                    </Link>
                  </DropdownMenuItem>

                  <DialogTrigger asChild>
                    <DropdownMenuItem>
                      Delete content
                    </DropdownMenuItem>
                  </DialogTrigger>
                </DropdownMenuContent>
              </DropdownMenu>

              <DialogContent>
                <DialogHeader>
                  <DialogTitle>
                    Are you sure you want to delete this content entity?
                  </DialogTitle>
                  <DialogDescription asChild>
                    <DeletionWarning
                      id={row.original.id}
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
      data={content}
      filter={{
        field: 'title',
      }}
      noResultsText="No content yet."
    />
  )
}
