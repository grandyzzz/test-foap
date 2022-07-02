import { Column, Table } from 'modules/ui'
import type { Car } from '../../types'
import TableItem from './TableItem'
import { Section } from 'modules/layout'

const tableColumns: Column[] = [
  {
    maxWidth: 100,
    field: 'image',
    title: 'Image',
  },
  {
    field: 'name',
    title: 'Name',
  },
  {
    maxWidth: 100,
    field: 'mileage',
    title: 'Mileage',
  },
  {
    maxWidth: 115,
    field: 'stock_number',
    title: 'Stock Number',
  },
  {
    maxWidth: 100,
    field: 'price',
    title: 'Price',
  },
  {
    maxWidth: 80,
    field: 'actions',
  },
]

interface CarsTableProps {
  data: Car[]
}

function CarsTable({ data }: CarsTableProps) {
  function rowRenderer(item: Car) {
    return <TableItem key={item.id} item={item} />
  }

  return (
    <Section>
      <Table columns={tableColumns} data={data} rowRenderer={rowRenderer} />
    </Section>
  )
}

export default CarsTable
