import { useCallback } from 'react'
import { useDrag } from 'react-dnd'

import { useAppSelector } from '../../hooks/appHooks'
import { RootState } from '../../index'
import { selectCountIngredient } from '../../store/modules/constructor/constructor.selector'
import { IIngredientItem } from '../../utils/types'

export const useIngredientItemData = (item: IIngredientItem) => {
  const getCountIngredient = useCallback(
    (state: RootState) => selectCountIngredient(state, item._id),
    [item._id],
  )
  const count = useAppSelector(getCountIngredient)

  const [, dragRef] = useDrag({
    type: 'ingredient',
    item: { item },
  })

  return {
    dragRef,
    count,
  }
}
