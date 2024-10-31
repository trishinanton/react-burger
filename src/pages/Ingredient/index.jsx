import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { IngredientDetailsContent } from '../../components/IngredientDetailsContent'
import { selectIngredientsList } from '../../store/modules/ingredients/ingredients.selector'

export const Ingredient = () => {
  const { ingredientId } = useParams()

  const ingredients = useSelector(selectIngredientsList)

  const ingredientItem = ingredients.find(({ _id }) => _id === ingredientId)

  if (!ingredientItem) {
    return null
  }

  return (
    <main>
      <IngredientDetailsContent ingredientItem={ingredientItem} />
    </main>
  )
}
