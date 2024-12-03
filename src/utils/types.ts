export interface IIngredientItem {
  name: string
  price: number
  image: string
  calories: number
  proteins: number
  fat: number
  carbohydrates: number
  type?: string
  uuid: string
  _id: string
  image_large: string
}

export const IngredientItemDefault = {
  name: '',
  price: 0,
  image: '',
  calories: 0,
  proteins: 0,
  fat: 0,
  carbohydrates: 0,
}
