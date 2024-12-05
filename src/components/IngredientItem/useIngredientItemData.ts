import { useCallback } from 'react'
import { useDrag } from 'react-dnd'
import { useSelector } from 'react-redux'

import { selectCountIngredient } from '../../store/modules/constructor/constructor.selector'
import { IIngredientItem } from '../../utils/types'

export const useIngredientItemData = (item: IIngredientItem) => {
  const getCountIngredient = useCallback(
    // todo - затепизировать стор в след спринт
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    state => selectCountIngredient(state, item._id),
    [item._id],
  )
  const count = useSelector(getCountIngredient)

  const [, dragRef] = useDrag({
    type: 'ingredient',
    item: { item },
  })

  return {
    dragRef,
    count,
  }
}
