import { useEffect } from 'react'

import { fetchIngredients } from '../store/modules/ingredients/ingredients.reducer'
import { fetchUser } from '../store/modules/user/user.reducer'
import { useAppDispatch } from './appHooks'

export const useAppData = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchUser())
    dispatch(fetchIngredients())
  }, [])
}
