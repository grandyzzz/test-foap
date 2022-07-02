import cn from 'classnames'
import type { Column } from '../TableColumn'
import { Children, cloneElement, isValidElement, ReactNode } from 'react'

export interface TableRowProps {
  className?: string
  columns?: Column[]
  children?: ReactNode
}

export function TableRow({ className, columns = [], children }: TableRowProps) {
  return (
    <div
      className={cn(
        className,
        'w-full flex items-center justify-start py-4 border-b border-gray-400 border-solid'
      )}
    >
      {Children.toArray(children).map((child, index) => {
        if (isValidElement(child)) {
          return cloneElement(child, { ...columns[index] })
        }
        return child
      })}
    </div>
  )
}
