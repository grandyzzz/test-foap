import Button from '../Button'
import cn from 'classnames'
import type { Option } from 'types'

interface StatsTextProps {
  className?: string
  options: Option[]
  value: string
  onChange(value: string): void
}

export function FilterButtons({
  className,
  options,
  value,
  onChange,
}: StatsTextProps) {
  function handleClick(filterValue: string) {
    return function () {
      onChange(filterValue)
    }
  }

  return (
    <div className={cn(className, 'flex')}>
      {options.map((option) => (
        <Button
          key={option.value}
          className={cn({
            'font-normal': option.value !== value,
            'border border-solid': option.value === value,
          })}
          variant="text"
          onClick={handleClick(option.value)}
        >
          {option.label}
        </Button>
      ))}
    </div>
  )
}
