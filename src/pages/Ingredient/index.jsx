import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'

import { IngredientDetailsContent } from '../../components/IngredientDetailsContent'
import { IngredientDetailsModal } from '../../components/IngredientDetailsModal'
import { fetchIngredients } from '../../store/modules/ingredients/ingredients.reducer'
import { selectIngredientsList } from '../../store/modules/ingredients/ingredients.selector'

export const Ingredient = () => {
  const location = useLocation()
  const ingredient = location.state && location.state.ingredient

  const { ingredientId } = useParams()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchIngredients())
  }, [])

  const ingredients = useSelector(selectIngredientsList)

  const ingredientItem = ingredients.find(({ _id }) => _id === ingredientId)

  if (!ingredientItem) {
    return null
  }

  if (ingredient) {
    return <IngredientDetailsModal />
  }

  return (
    <main>
      <IngredientDetailsContent ingredientItem={ingredientItem} />
    </main>
  )
}
