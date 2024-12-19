import cn from 'classnames'
import { FC } from 'react'
import { useSelector } from 'react-redux'

import { selectOrders } from '../../store/modules/ws/ws.selector'
import { OrderCard } from './OrderCard'

import styles from './OrdersList.module.css'

export const OrdersList: FC<{ isProfileOrdersPage?: boolean }> = ({
  isProfileOrdersPage,
}) => {
  const orders = useSelector(selectOrders) || []

  return (
    <div className={cn('flex-col-fs mr-15', styles.container)}>
      {orders.length > 0
        ? orders.map(item => (
            <OrderCard
              key={item._id}
              orderItem={item}
              isProfileOrdersPage={isProfileOrdersPage}
            />
          ))
        : null}
    </div>
  )
}
