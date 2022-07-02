import { TableRow, TableColumn, TableRowProps, Text, Button } from 'modules/ui'
import type { Car } from '../../types'
import { formatCarName } from '../../utils'
import { formatMileage, formatPrice } from 'utils'
import { Link } from 'react-router-dom'

interface TableItemProps extends TableRowProps {
  item: Car
}

function TableItem({ item, ...otherProps }: TableItemProps) {
  return (
    <TableRow {...otherProps}>
      <TableColumn>
        <img
          className="w-full object-cover h-14"
          src={item.image_url}
          alt={item.car_name}
        />
      </TableColumn>
      <TableColumn>
        <Text className="truncate">{formatCarName(item)}</Text>
      </TableColumn>
      <TableColumn>
        <Text>{formatMileage(item.mileage)}</Text>
      </TableColumn>
      <TableColumn>
        <Text>{item.stock_number}</Text>
      </TableColumn>
      <TableColumn>
        <Text>{formatPrice(item.price)}</Text>
      </TableColumn>
      <TableColumn>
        <Link to={`cars/edit/${item.id}`}>
          <Button variant="text">Edit</Button>
        </Link>
      </TableColumn>
    </TableRow>
  )
}

export default TableItem
