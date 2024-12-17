import cn from 'classnames'
import { FC } from 'react'

import { OrderCard } from './OrderCard'

import styles from './OrdersList.module.css'

export const OrdersList: FC = () => {
  const orders = [
    {
      ingredients: [
        '60d3463f7034a000269f45e7',
        '60d3463f7034a000269f45e9',
        '60d3463f7034a000269f45e8',
        '60d3463f7034a000269f45ea',
        '60d3463f7034a000269f45ea',
        '60d3463f7034a000269f45ea',
        '60d3463f7034a000269f45ea',
        '60d3463f7034a000269f45ea',
        '60d3463f7034a000269f45ea',
      ],
      _id: '',
      status: 'done',
      number: 0,
      createdAt: '2021-06-23T14:43:22.587Z',
      updatedAt: '2021-06-23T14:43:22.603Z',
    },
    {
      ingredients: [
        '60d3463f7034a000269f45e7',
        '60d3463f7034a000269f45e9',
        '60d3463f7034a000269f45e8',
      ],
      _id: '',
      status: 'done',
      number: 10,
      createdAt: '2021-06-23T14:43:22.587Z',
      updatedAt: '2021-06-23T14:43:22.603Z',
    },
  ]

  return (
    <div className={cn('flex-col-fs mr-15', styles.container)}>
      {orders.map(({ _id, number, createdAt, ingredients }) => (
        <OrderCard
          key={_id}
          number={number}
          name={'Interstellar бургер'}
          createdAt={createdAt}
          price={560}
          ingredients={ingredients}
        />
      ))}
    </div>
  )
}
