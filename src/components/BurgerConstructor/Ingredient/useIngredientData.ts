import { useMemo } from 'react'
import { useCallback, useEffect } from 'react'
import { useDrag, useDrop } from 'react-dnd'

import { useAppDispatch } from '../../../hooks/appHooks'
import { removeIngredient } from '../../../store/modules/constructor/constructor.reducer'
import { IIngredientItem } from '../../../utils/types'

interface IParams {
  type?: 'top' | 'bottom'
  name: string
  setHoverItemUUId: (uuid: string) => void
  onDropHandler: (item: IIngredientItem) => void
  item: IIngredientItem
}

export const useIngredientData = ({
  type,
  name,
  setHoverItemUUId,
  onDropHandler,
  item,
}: IParams) => {
  const dispatch = useAppDispatch()
  const onDeleteElement = useCallback(() => {
    dispatch(removeIngredient(item))
  }, [])

  const [, dragRef] = useDrag({
    type: 'main',
    item: { item },
  })

  const [{ isHover }, dropTarget] = useDrop<
    { item: IIngredientItem },
    unknown,
    { isHover: boolean }
  >({
    accept: 'main',
    drop({ item }) {
      onDropHandler(item)
    },
    collect: monitor => ({
      isHover: monitor.isOver(),
    }),
  })

  const text = useMemo(() => {
    if (type === 'top') {
      return name + ' (верх)'
    }

    if (type === 'bottom') {
      return name + ' (низ)'
    }

    return name
  }, [type, name])

  useEffect(() => {
    if (isHover) {
      setHoverItemUUId(item.uuid)
    }
  }, [isHover, setHoverItemUUId, item.uuid])

  return {
    text,
    dragRef,
    dropTarget,
    onDeleteElement,
  }
}
