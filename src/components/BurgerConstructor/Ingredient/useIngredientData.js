import { useMemo } from 'react'
import { useCallback, useEffect } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import { useDispatch } from 'react-redux'

import { removeIngredient } from '../../../store/modules/constructor/constructor.reducer'

export const useIngredientData = ({
  type,
  name,
  setHoverItemUUId,
  onDropHandler,
  item,
}) => {
  const dispatch = useDispatch()
  const onDeleteElement = useCallback(() => {
    dispatch(removeIngredient(item))
  }, [])

  const [, dragRef] = useDrag({
    type: 'main',
    item: { item },
  })

  const [{ isHover }, dropTarget] = useDrop({
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
