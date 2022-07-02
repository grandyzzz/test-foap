import type { ChangeEvent } from 'react'
import type { Option } from 'types'
import cn from 'classnames'

interface SelectProps {
  className?: string
  name: string
  value: string
  placeholder?: string
  options: Option[]
  onChange?(e: ChangeEvent<HTMLSelectElement>): void
}

export function Select({
  className,
  name,
  value,
  placeholder,
  options,
  onChange,
}: SelectProps) {
  return (
    <select
      className={cn(
        className,
        'w-full border border-gray-300 rounded-lg h-10 px-2 outline-none'
      )}
      name={name}
      value={value}
      onChange={onChange}
    >
      {placeholder && <option value="">{placeholder}</option>}
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}
