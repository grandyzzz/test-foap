import { statusOptions } from 'constants/options'
import { FilterButtons } from 'modules/ui'
import { useDispatch, useSelector } from 'react-redux'
import { selectFilters, setListed } from '../../../services'

interface StatusSelectorProps {
  className?: string
}

function StatusSelector({ className }: StatusSelectorProps) {
  const dispatch = useDispatch()
  const { listed } = useSelector(selectFilters)
  const status = listed ? 'listed' : 'unlisted'

  return (
    <FilterButtons
      className={className}
      options={statusOptions}
      value={status}
      onChange={(value) => dispatch(setListed(value === 'listed'))}
    />
  )
}

export default StatusSelector
