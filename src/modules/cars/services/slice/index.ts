import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { Car } from '../../types'
import { initialCars } from 'constants/fixtures'
import type { sortOptions } from 'constants/options'
import type { RootState } from 'modules/core'
import { formatCarName } from '../../utils'
import { sortArray } from 'utils'
import type { SortDirection } from 'types'

type SortValue = typeof sortOptions[number]['value']
type ViewMode = 'list' | 'grid'
type Filters = {
  searchValue: string
  sortBy: SortValue
  listed: boolean
}

export interface CarsState {
  items: Car[]
  filters: Filters
  viewMode: ViewMode
}

const initialState: CarsState = {
  items: initialCars,
  filters: {
    listed: false,
    searchValue: '',
    sortBy: ':',
  },
  viewMode: 'list',
}

export const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.filters.searchValue = action.payload
    },
    setListed: (state, action: PayloadAction<boolean>) => {
      state.filters.listed = action.payload
    },
    setSortBy: (state, action: PayloadAction<SortValue>) => {
      state.filters.sortBy = action.payload
    },
    setViewMode: (state, action: PayloadAction<ViewMode>) => {
      state.viewMode = action.payload
    },
  },
})

export const { setSearchValue, setListed, setViewMode, setSortBy } =
  carsSlice.actions

export default carsSlice.reducer

const selectCarsItems = (state: RootState) => state.cars.items
const selectFilteredCars = (cars: Car[], filters: Filters) =>
  cars.filter(
    (car) =>
      car.status === filters.listed &&
      formatCarName(car)
        .toLowerCase()
        .includes(filters.searchValue.toLowerCase())
  )

export const selectViewMode = (state: RootState) => state.cars.viewMode
export const selectFilters = (state: RootState) => state.cars.filters

export const selectResultCars = createSelector(
  [selectFilters, selectCarsItems],
  (filters, items) => {
    const [sortField, sortDirection] = filters.sortBy.split(':')
    const filteredItems = selectFilteredCars(items, filters)
    return sortArray(
      filteredItems,
      sortField as keyof Car,
      sortDirection as SortDirection
    )
  }
)
