import { Container, Page, ResultContainer } from 'modules/layout'
import { CarsGrid, CarsTable, Filters } from '../../components'
import { useSelector } from 'react-redux'
import { selectResultCars, selectViewMode } from '../../services'
import { Link } from 'react-router-dom'
import { Button } from 'modules/ui'

function CarsPage() {
  const viewMode = useSelector(selectViewMode)
  const cars = useSelector(selectResultCars)

  return (
    <Page>
      <Container>
        <Filters />
        <div className="w-full flex justify-end">
          <Link to="cars/create">
            <Button color="accent">Create</Button>
          </Link>
        </div>
        <ResultContainer data={cars}>
          {viewMode === 'list' ? (
            <CarsTable data={cars} />
          ) : (
            <CarsGrid data={cars} />
          )}
        </ResultContainer>
      </Container>
    </Page>
  )
}

export default CarsPage
