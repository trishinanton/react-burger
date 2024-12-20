import { FC } from 'react'
import { useParams } from 'react-router-dom'

import { IngredientDetailsContent } from '../../components/IngredientDetailsContent'
import { useAppSelector } from '../../hooks/appHooks'
import { selectIngredientsList } from '../../store/modules/ingredients/ingredients.selector'
import { IIngredientItem } from '../../utils/types'

export const Ingredient: FC = () => {
  const { ingredientId } = useParams()

  const ingredients = useAppSelector(selectIngredientsList)

  const ingredientItem = ingredients.find(
    ({ _id }: IIngredientItem) => _id === ingredientId,
  )

  if (!ingredientItem) {
    return null
  }

  return (
    <main>
      <IngredientDetailsContent ingredientItem={ingredientItem} />
    </main>
  )
}
