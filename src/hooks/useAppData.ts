import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { fetchIngredients } from '../store/modules/ingredients/ingredients.reducer'
import { fetchUser } from '../store/modules/user/user.reducer'

export const useAppData = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    dispatch(fetchUser())
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    dispatch(fetchIngredients())
  }, [])
}
