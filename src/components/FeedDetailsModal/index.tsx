import { MouseEvent, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import { selectOrders } from '../../store/modules/ws/ws.selector'
import { IOrder } from '../../utils/types'
import { FeedDetailsContent } from '../FeedDetailsContent'
import { Modal } from '../Modal'

export const FeedDetailsModal = () => {
  const navigate = useNavigate()
  const { feedId } = useParams()
  const orders = useSelector(selectOrders)
  const orderItem = orders.find((order: IOrder) => order._id === feedId)

  const onClose = useCallback(
    (e: MouseEvent<HTMLDivElement> | KeyboardEvent) => {
      e.stopPropagation()
      navigate(-1)
    },
    [],
  )

  return (
    <Modal isOpen onClose={onClose}>
      {orderItem ? <FeedDetailsContent orderItem={orderItem} /> : null}
    </Modal>
  )
}
