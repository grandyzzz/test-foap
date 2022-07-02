import { TextField } from 'modules/form'
import { useFormik } from 'formik'

interface CarFormProps {
  mode: 'create' | 'edit'
}

function CarForm({ mode }: CarFormProps) {
  const { values, handleChange, ...formik } = useFormik({
    initialValues: {
      car_name: '',
      modal_name: '',
      car_price: '',
      modal_year: '',
      mileage: '',
      image_url: '',
      stock_number: '',
    },
    onSubmit: handleSubmit,
  })

  function handleSubmit() {}

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        name="car_name"
        label="Car Name"
        value={values.car_name}
        onChange={handleChange}
      />
      <TextField
        className="mt-5"
        name="modal_name"
        label="Modal Name"
        value={values.modal_name}
        onChange={handleChange}
      />
      <TextField
        className="mt-5"
        name="car_price"
        label="Price"
        value={values.car_price}
        onChange={handleChange}
      />
      <TextField
        className="mt-5"
        name="modal_year"
        label="Year"
        value={values.modal_year}
        onChange={handleChange}
      />
      <TextField
        className="mt-5"
        name="mileage"
        label="Mileage"
        value={values.mileage}
        onChange={handleChange}
      />
      <TextField
        className="mt-5"
        name="image_url"
        label="Image URL"
        value={values.image_url}
        onChange={handleChange}
      />
      <TextField
        className="mt-5"
        name="stock_number"
        label="Stock Number"
        value={values.stock_number}
        onChange={handleChange}
      />
    </form>
  )
}

export default CarForm
