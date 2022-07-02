import type { Car } from '../types'

export const formatCarName = ({ car_name, modal_name, modal_year }: Car) => {
  return `${car_name} ${modal_name}, ${modal_year}`
}
