import cn from 'classnames'
import { FC } from 'react'
import { useSelector } from 'react-redux'

import {
  selectOrders,
  selectTotalOrders,
  selectTotalTodayOrders,
} from '../../store/modules/ws/ws.selector'

import styles from './Stats.module.css'

export const Stats: FC = () => {
  const total = useSelector(selectTotalOrders)
  const totalToday = useSelector(selectTotalTodayOrders)
  const orders = useSelector(selectOrders)
  const doneOrders = orders.filter(({ status }) => status === 'done')
  const pendingOrders = orders.filter(({ status }) => status === 'pending')

  return (
    <div className={cn('flex-col-fs', styles.container)}>
      <div className={'flex-row-sb-fs mb-15'}>
        <div>
          <div className={'text text_type_main-medium flex-col-fs mb-6'}>
            Готовы:
          </div>
          <div className={styles.orders_container}>
            {doneOrders.length > 0
              ? doneOrders.map(({ _id, number }) => (
                  <div
                    key={_id}
                    className={cn(
                      'text text_type_digits-default',
                      styles.done_color,
                    )}>
                    {number}
                  </div>
                ))
              : null}
          </div>
        </div>
        <div>
          <div className={'text text_type_main-medium mb-6'}>В работе:</div>
          <div className={styles.orders_container}>
            {pendingOrders.length > 0
              ? pendingOrders.map(({ _id, number }) => (
                  <div key={_id} className={'text text_type_digits-default'}>
                    {number}
                  </div>
                ))
              : null}
          </div>
        </div>
      </div>
      <div className={'mb-15'}>
        <div className={'text text_type_main-medium'}>
          Выполнено за все время:
        </div>
        <div className={'text text_type_digits-large'}>{total}</div>
      </div>
      <div>
        <div className={'text text_type_main-medium'}>
          Выполнено за сегодня:
        </div>
        <div className={'text text_type_digits-large'}>{totalToday}</div>
      </div>
    </div>
  )
}
