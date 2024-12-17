import cn from 'classnames'
import { FC } from 'react'
import { useSelector } from 'react-redux'

import { selectOrders } from '../../store/modules/ws/ws.selector'
import { OrderCard } from './OrderCard'

import styles from './OrdersList.module.css'

export const OrdersList: FC = () => {
  const orders = useSelector(selectOrders)

  return (
    <div className={cn('flex-col-fs mr-15', styles.container)}>
      {orders.map(({ _id, number, createdAt, ingredients, name }) => (
        <OrderCard
          key={_id}
          number={number}
          name={name}
          createdAt={createdAt}
          price={560}
          ingredients={ingredients}
        />
      ))}
    </div>
  )
}
