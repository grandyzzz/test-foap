import type { SortDirection } from 'types'

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price)
}

export const formatMileage = (mileage: number) => `${mileage} km`

export const sortArray = <T>(
  arr: T[],
  field: keyof T,
  direction: SortDirection
) => {
  const items = [...arr]

  if (direction === 'none') return items

  items.sort((a, b) => {
    if (a[field] > b[field]) return 1
    if (a[field] < b[field]) return -1
    return 0
  })

  if (direction === 'desc') items.reverse()

  return items
}
