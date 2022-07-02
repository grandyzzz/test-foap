import { Routes, Route } from 'react-router-dom'
import { Layout } from 'modules/layout'
import { CarsPage, CreateCarPage } from 'modules/cars'

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<CarsPage />} />
        <Route path="cars/edit/:id" element={<CreateCarPage />} />
        <Route path="cars/create" element={<CreateCarPage />} />
      </Routes>
    </Layout>
  )
}

export default App
