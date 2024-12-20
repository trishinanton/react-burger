import { FC, MouseEvent, useCallback, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { COOKIE_ACCESS_TOKEN } from '../../constants/cookies'
import { useAppDispatch, useAppSelector } from '../../hooks/appHooks'
import {
  wsConnectionClosed,
  wsConnectionStart,
} from '../../store/modules/ws/ws.reducer'
import { selectOrders } from '../../store/modules/ws/ws.selector'
import { getCookie } from '../../utils/cookies'
import { IOrder } from '../../utils/types'
import { wsUrl, wsUrlAll } from '../../utils/wsUrls'
import { FeedDetailsContent } from '../FeedDetailsContent'
import { Modal } from '../Modal'

interface Props {
  isProfileOrdersPage?: boolean
}
export const FeedDetailsModal: FC<Props> = ({ isProfileOrdersPage }) => {
  const navigate = useNavigate()
  const { feedId } = useParams()
  const orders = useAppSelector(selectOrders)
  const orderItem = orders.find((order: IOrder) => order._id === feedId)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(
      wsConnectionStart(
        isProfileOrdersPage
          ? wsUrl +
              `?token=${(getCookie(COOKIE_ACCESS_TOKEN) || '').slice('Bearer%'.length)}`
          : wsUrlAll,
      ),
    )

    return () => {
      dispatch(wsConnectionClosed())
    }
  }, [])

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
