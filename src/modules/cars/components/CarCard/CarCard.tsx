import type { Car } from '../../types'
import { Button, Text } from '../../../ui'
import { formatCarName } from '../../utils'
import { formatMileage, formatPrice } from 'utils'
import { Link } from 'react-router-dom'
import cn from 'classnames'

interface CarCardProps {
  className?: string
  car: Car
}

function CarCard({ className, car }: CarCardProps) {
  return (
    <article className={cn(className, 'card flex flex-col overflow-hidden')}>
      <img
        className="w-full object-cover h-52"
        src={car.image_url}
        alt={car.modal_name}
      />
      <div className="flex flex-col justify-between flex-1 w-full p-5">
        <div className="w-full">
          <Text variant="heading2">{formatCarName(car)}</Text>
          <div className="flex w-full justify-between mt-2.5">
            <Text>{formatMileage(car.mileage)}</Text>
            <Text color="gray">{car.stock_number}</Text>
          </div>
          <Text className="mt-2.5" variant="bodyBold">
            {formatPrice(car.price)}
          </Text>
        </div>
        <Link to={`cars/edit/${car.id}`}>
          <Button variant="text">Edit</Button>
        </Link>
      </div>
    </article>
  )
}

export default CarCard
