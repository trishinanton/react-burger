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

  const doneOrdersFirstCol = doneOrders.slice(0, 10)
  const doneOrdersSecondCol = doneOrders.slice(10, 20)

  const pendingOrdersFirstCol = pendingOrders.slice(0, 10)
  const pendingOrdersSecondCol = pendingOrders.slice(10, 20)

  return (
    <div className={cn('flex-col-fs', styles.container)}>
      <div className={'flex-row-sb-fs mb-15'}>
        <div>
          <div className={'text text_type_main-medium flex-col-fs mb-6'}>
            Готовы:
          </div>
          <div className={styles.orders_container}>
            <div className={cn(styles.orders_col, 'mr-10')}>
              {doneOrdersFirstCol.length > 0
                ? doneOrdersFirstCol.map(({ _id, number }) => (
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
            <div className={styles.orders_col}>
              {doneOrdersSecondCol.length > 0
                ? doneOrdersSecondCol.map(({ _id, number }) => (
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
        </div>
        <div>
          <div className={'text text_type_main-medium mb-6'}>В работе:</div>
          <div className={styles.orders_container}>
            <div className={cn(styles.orders_col, 'mr-10')}>
              {pendingOrdersFirstCol.length > 0
                ? pendingOrdersFirstCol.map(({ _id, number }) => (
                    <div key={_id} className={'text text_type_digits-default'}>
                      {number}
                    </div>
                  ))
                : null}
            </div>
            <div className={styles.orders_col}>
              {pendingOrdersSecondCol.length > 0
                ? pendingOrdersSecondCol.map(({ _id, number }) => (
                    <div key={_id} className={'text text_type_digits-default'}>
                      {number}
                    </div>
                  ))
                : null}
            </div>
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
