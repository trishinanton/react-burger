import { ChangeEvent, useState } from 'react'

interface IValues {
  name: string
  email: string
  password: string
  token: string
}
export const useFormData = () => {
  const [values, setValues] = useState<IValues>({} as IValues)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target

    setValues({ ...values, [name]: value })
  }

  return { values, handleChange, setValues }
}
