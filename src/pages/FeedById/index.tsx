import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { FeedDetailsContent } from '../../components/FeedDetailsContent'
import { selectOrders } from '../../store/modules/ws/ws.selector'
import { IOrder } from '../../utils/types'

import styles from './FeedById.module.css'

export const FeedById = () => {
  const { feedId } = useParams()

  const orders = useSelector(selectOrders)
  const orderItem = orders.find((order: IOrder) => order._id === feedId)

  if (!orderItem) {
    return null
  }

  return (
    <main className={styles.container}>
      <FeedDetailsContent orderItem={orderItem} />
    </main>
  )
}
