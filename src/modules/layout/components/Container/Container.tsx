import type { ReactNode } from 'react'
import cn from 'classnames'

interface ContainerProps {
  className?: string
  children: ReactNode
}

function Container({ children, className }: ContainerProps) {
  return <div className={cn(className, 'container')}>{children}</div>
}

export default Container
