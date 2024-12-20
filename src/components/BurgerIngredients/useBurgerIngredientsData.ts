import { useState } from 'react'

import { useAppSelector } from '../../hooks/appHooks'
import { selectIngredientsList } from '../../store/modules/ingredients/ingredients.selector'

export const useBurgerIngredientsData = () => {
  const [current, setCurrent] = useState('buns')
  const data = useAppSelector(selectIngredientsList)

  return {
    current,
    setCurrent,
    data,
  }
}
