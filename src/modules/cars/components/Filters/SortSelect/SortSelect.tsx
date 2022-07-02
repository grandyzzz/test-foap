import { sortOptions } from '../../../../../constants/options'
import { Select } from '../../../../form'
import cn from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { selectFilters, setSortBy } from '../../../services'
import type { ChangeEvent } from 'react'

interface SortSelectProps {
  className?: string
}

function SortSelect({ className }: SortSelectProps) {
  const dispatch = useDispatch()
  const { sortBy } = useSelector(selectFilters)

  function handleChange(e: ChangeEvent<HTMLSelectElement>) {
    const {
      target: { value },
    } = e

    dispatch(setSortBy(value))
  }

  return (
    <Select
      className={cn(className, 'min-w-[150px]')}
      name={'sort-car'}
      value={sortBy}
      options={sortOptions}
      onChange={handleChange}
      placeholder="Sort By"
    />
  )
}

export default SortSelect
