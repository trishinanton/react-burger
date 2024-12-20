import { FC, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { FeedDetailsContent } from '../../components/FeedDetailsContent'
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

import styles from './FeedById.module.css'

interface Props {
  isProfileOrdersPage?: boolean
}
export const FeedById: FC<Props> = ({ isProfileOrdersPage }) => {
  const { feedId } = useParams()

  const orders = useAppSelector(selectOrders) || []
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

  if (!orderItem) {
    return null
  }

  return (
    <main className={styles.container}>
      <FeedDetailsContent orderItem={orderItem} />
    </main>
  )
}
