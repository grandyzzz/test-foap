import { Container, Page } from 'modules/layout'
import { Text } from 'modules/ui'
import { CarForm } from '../../components'

function CreateCarPage() {
  return (
    <Page>
      <Container className="max-w-xl">
        <Text variant="heading">Create car</Text>
        <CarForm mode="create" />
      </Container>
    </Page>
  )
}

export default CreateCarPage
