import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import { selectIngredientsList } from '../../store/modules/ingredients/ingredients.selector'
import { IIngredientItem } from '../../utils/types'
import { IngredientDetailsContent } from '../IngredientDetailsContent'
import { Modal } from '../Modal'

export const IngredientDetailsModal = () => {
  const navigate = useNavigate()
  const { ingredientId } = useParams()
  const list = useSelector(selectIngredientsList)
  const ingredientItem = list.find(
    (item: IIngredientItem) => item._id === ingredientId,
  )

  const onClose = useCallback((e: Event) => {
    e.stopPropagation()
    navigate(-1)
  }, [])

  return (
    <Modal isOpen onClose={onClose}>
      <IngredientDetailsContent ingredientItem={ingredientItem} />
    </Modal>
  )
}
