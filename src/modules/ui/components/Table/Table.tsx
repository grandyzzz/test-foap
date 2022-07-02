import cn from 'classnames'
import { TableColumn } from './TableColumn'
import type { Column } from './TableColumn'
import { cloneElement } from 'react'
import { Text } from '../Text'

interface TableProps<T> {
  className?: string
  headerClassName?: string
  columns: Column[]
  data: T[]
  rowRenderer(item: T, index: number): JSX.Element
}

export function Table<T>({
  className,
  columns = [],
  data,
  rowRenderer,
}: TableProps<T>) {
  return (
    <div className={cn(className, 'w-full')}>
      <div className="w-full flex py-5 border-b border-gray-400 border-solid">
        {columns.map(({ title, ...props }) => (
          <TableColumn key={props.field} {...props}>
            {title && <Text variant="bodyBold">{title}</Text>}
          </TableColumn>
        ))}
      </div>
      <div className="w-full">
        {data.map((item, index) =>
          cloneElement(rowRenderer(item, index), { columns })
        )}
      </div>
    </div>
  )
}
