import { ChangeEvent, useState } from 'react'

interface IValues {
  name: string
  email: string
  password: string
  token: string
}
export const useFormData = (inputValues = {}) => {
  const [values, setValues] = useState<IValues>(inputValues as IValues)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target

    setValues({ ...values, [name]: value })
  }

  return { values, handleChange, setValues }
}
