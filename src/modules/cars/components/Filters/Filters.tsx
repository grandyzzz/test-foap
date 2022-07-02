import { Section } from 'modules/layout'
import StatusSelector from './StatusSelector'
import ViewSelector from './ViewSelector'
import SortSelect from './SortSelect'
import SearchCar from './SearchCar'

function Filters() {
  return (
    <Section className="flex items-center justify-between">
      <div className="flex items-center">
        <SearchCar />
        <StatusSelector className="ml-4" />
      </div>
      <div className="flex items-center">
        <ViewSelector />
        <SortSelect className="ml-4" />
      </div>
    </Section>
  )
}

export default Filters
