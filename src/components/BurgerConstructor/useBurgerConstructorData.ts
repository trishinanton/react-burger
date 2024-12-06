import { useCallback, useState } from 'react'
import { useDrop } from 'react-dnd'
import { useDispatch, useSelector } from 'react-redux'
import { v1 as uuid } from 'uuid'

import {
  addIngredient,
  setAllIngredients,
} from '../../store/modules/constructor/constructor.reducer'
import {
  selectConstructorList,
  selectCurrentBun,
} from '../../store/modules/constructor/constructor.selector'
import { IIngredientItem } from '../../utils/types'

export const useBurgerConstructorData = () => {
  const data = useSelector(selectConstructorList)
  const currentItemBun = useSelector(selectCurrentBun)
  const dispatch = useDispatch()

  const [hoverItemUUId, setHoverItemUUId] = useState('')

  const onDropHandler = useCallback((item: IIngredientItem) => {
    dispatch(addIngredient(item))
  }, [])

  const [, dropTarget] = useDrop<
    { item: Omit<IIngredientItem, 'uuid'> },
    unknown
  >({
    accept: 'ingredient',
    drop({ item }) {
      onDropHandler({ uuid: uuid(), ...item })
    },
  })

  const onDropHandlerMain = useCallback(
    (item: IIngredientItem) => {
      if (hoverItemUUId) {
        const filteredItems = data.filter(el => el.uuid !== item.uuid)

        const findItem = filteredItems.find(el => el.uuid === hoverItemUUId)
        const idx = filteredItems.indexOf(findItem as IIngredientItem)

        filteredItems.splice(idx, 0, item)

        dispatch(setAllIngredients(filteredItems))
      }
    },
    [hoverItemUUId, data],
  )

  return {
    dropTarget,
    currentItemBun,
    data,
    setHoverItemUUId,
    onDropHandlerMain,
  }
}
