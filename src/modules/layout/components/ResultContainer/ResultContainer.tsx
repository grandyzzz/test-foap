import { Section } from '../Section'
import { Text } from 'modules/ui'
//import type {ReactNode} from "react";

interface ResultContainerProps<T> {
  data: T[]
  children: JSX.Element
}

function ResultContainer<T>({ data, children }: ResultContainerProps<T>) {
  if (data.length === 0)
    return (
      <Section className="flex items-center justify-center">
        <Text variant="heading2">No Results</Text>
      </Section>
    )

  return children
}

export default ResultContainer
