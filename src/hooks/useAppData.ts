import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { AppDispatch } from '../index'
import { fetchIngredients } from '../store/modules/ingredients/ingredients.reducer'
import { fetchUser } from '../store/modules/user/user.reducer'

export const useAppData = () => {
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(fetchUser())
    dispatch(fetchIngredients())
  }, [])
}
