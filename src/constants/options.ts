import type { Option } from 'types'

export const statusOptions: Option[] = [
  {
    label: 'Listed',
    value: 'listed',
  },
  {
    label: 'Unlisted',
    value: 'unlisted',
  },
]

export const viewOptions: Option[] = [
  {
    label: 'List',
    value: 'list',
  },
  {
    label: 'Grid',
    value: 'grid',
  },
]

//asc: small to large ↓
//desc: large to small ↑

// car_name, modal_name, modal_year, mileage, stock_number, price
export const sortOptions: Option[] = [
  {
    label: 'Car Name ↓',
    value: 'car_name:asc',
  },
  {
    label: 'Car Name ↑',
    value: 'car_name:desc',
  },
  {
    label: 'Modal Name ↓',
    value: 'modal_name:asc',
  },
  {
    label: 'Modal Name ↑',
    value: 'modal_name:desc',
  },
  {
    label: 'Year ↓',
    value: 'modal_year:asc',
  },
  {
    label: 'Year ↑',
    value: 'modal_year:desc',
  },
  {
    label: 'Mileage ↓',
    value: 'mileage:asc',
  },
  {
    label: 'Mileage ↑',
    value: 'mileage:desc',
  },
  {
    label: 'Stock Number ↓',
    value: 'stock_number:asc',
  },
  {
    label: 'Stock Number ↑',
    value: 'stock_number:desc',
  },
  {
    label: 'Price ↓',
    value: 'price:asc',
  },
  {
    label: 'Price ↑',
    value: 'price:desc',
  },
]
