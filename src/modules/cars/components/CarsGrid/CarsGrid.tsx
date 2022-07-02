import { Section } from 'modules/layout'
import CarCard from '../CarCard'
import cn from 'classnames'
import type { Car } from '../../types'

interface CarsGridProps {
  className?: string
  data: Car[]
}

function CarsGrid({ className, data }: CarsGridProps) {
  return (
    <Section className={cn(className, 'grid gap-6 grid-cols-3')}>
      {data.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </Section>
  )
}

export default CarsGrid
