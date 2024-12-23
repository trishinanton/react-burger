import { MouseEvent, useCallback } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { useAppSelector } from '../../hooks/appHooks'
import { selectIngredientsList } from '../../store/modules/ingredients/ingredients.selector'
import { IIngredientItem } from '../../utils/types'
import { IngredientDetailsContent } from '../IngredientDetailsContent'
import { Modal } from '../Modal'

export const IngredientDetailsModal = () => {
  const navigate = useNavigate()
  const { ingredientId } = useParams()
  const list = useAppSelector(selectIngredientsList)
  const ingredientItem = list.find(
    (item: IIngredientItem) => item._id === ingredientId,
  )

  const onClose = useCallback(
    (e: MouseEvent<HTMLDivElement> | KeyboardEvent) => {
      e.stopPropagation()
      navigate(-1)
    },
    [],
  )

  return (
    <Modal isOpen onClose={onClose}>
      <IngredientDetailsContent ingredientItem={ingredientItem} />
    </Modal>
  )
}
