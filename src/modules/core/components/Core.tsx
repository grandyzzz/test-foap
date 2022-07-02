import type { ReactNode } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Redux } from '../modules/redux'

interface CoreProps {
  children: ReactNode
}

function Core({ children }: CoreProps) {
  return (
    <Redux>
      <Router>{children}</Router>
    </Redux>
  )
}

export default Core
