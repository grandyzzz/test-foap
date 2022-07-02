import { viewOptions } from 'constants/options'
import { FilterButtons } from 'modules/ui'
import { useDispatch, useSelector } from 'react-redux'
import { selectViewMode, setViewMode } from '../../../services'

interface ViewSelectorProps {
  className?: string
}

function ViewSelector({ className }: ViewSelectorProps) {
  const dispatch = useDispatch()
  const viewMode = useSelector(selectViewMode)

  return (
    <FilterButtons
      className={className}
      options={viewOptions}
      value={viewMode}
      onChange={(value: 'list' | 'grid') => dispatch(setViewMode(value))}
    />
  )
}

export default ViewSelector
