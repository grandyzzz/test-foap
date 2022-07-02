import type { ReactNode } from 'react'
import cn from 'classnames'

export interface Column {
  className?: string
  field?: string
  title?: string
  children?: ReactNode
  maxWidth?: number
  minWidth?: number
  align?: 'left' | 'center' | 'right'
  noWrap?: boolean
}

export function TableColumn({
  className,
  maxWidth,
  minWidth,
  align = 'left',
  field,
  children,
  noWrap = true,
}: Column) {
  const columnStyle = {
    maxWidth: maxWidth || '100%',
    minWidth: minWidth || 50,
  }

  const columnClassNames = cn(className, 'flex w-full mr-4 last-child:mr-0', {
    truncate: noWrap,
  })

  return (
    <div className={columnClassNames} style={columnStyle}>
      {children}
    </div>
  )
}
