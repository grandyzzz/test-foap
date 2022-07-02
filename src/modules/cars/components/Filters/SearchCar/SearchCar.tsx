import { selectFilters, setSearchValue } from '../../../services'
import { SearchField } from '../../../../form'
import { useDispatch, useSelector } from 'react-redux'
import cn from 'classnames'

interface SearchCarProps {
  className?: string
}

function SearchCar({ className }: SearchCarProps) {
  const dispatch = useDispatch()
  const { searchValue } = useSelector(selectFilters)

  return (
    <SearchField
      name="search"
      className={cn(className, 'max-w-sm')}
      placeholder="Search for the car..."
      value={searchValue}
      onSubmit={({ search }) => dispatch(setSearchValue(search))}
    />
  )
}

export default SearchCar
