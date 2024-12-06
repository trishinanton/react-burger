export interface IIngredientItem {
  _id: string
  name: string
  type: string
  proteins: number
  fat: number
  carbohydrates: number
  calories: number
  price: number
  image: string
  image_mobile: string
  image_large: string
  uuid: string
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
