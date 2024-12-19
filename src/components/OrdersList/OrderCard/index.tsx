import { FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components'
import cn from 'classnames'
import { FC } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { useFeedOrderData } from '../../../hooks/useFeedOrderData'
import { IOrder } from '../../../utils/types'
import { Price } from '../../Price'

import styles from './OrderCard.module.css'

interface Props {
  orderItem: IOrder
  isProfileOrdersPage?: boolean
}
export const OrderCard: FC<Props> = ({ orderItem, isProfileOrdersPage }) => {
  const { number, name, createdAt, _id, status } = orderItem
  const location = useLocation()
  const { ingredientsEntity, resultPrice } = useFeedOrderData(orderItem)

  return (
    <Link
      to={isProfileOrdersPage ? `/profile/orders/${_id}` : `/feed/${_id}`}
      state={{
        [isProfileOrdersPage ? 'backgroundProfileOrder' : 'backgroundFeed']:
          location,
      }}
      className={styles.link}>
      <div className={cn('p-6 mb-4', styles.wrapper)}>
        <div className={cn('flex-row-sb', 'mb-6')}>
          <span className="text text_type_digits-default">#{number}</span>
          <FormattedDate
            className="text text_type_main-default"
            date={new Date(createdAt)}
          />
        </div>
        <div className="text text_type_main-medium mb-6">{name}</div>
        {isProfileOrdersPage ? (
          <div
            className={cn('text text_type_main-default mb-6', {
              [styles.status_done]: status === 'done',
            })}>
            {status === 'done' ? 'Выполнен' : 'Готовится'}
          </div>
        ) : null}
        <div className={'flex-row-sb'}>
          <div className={'flex-row'}>
            {Object.values(ingredientsEntity)
              .filter(el => Boolean(el))
              .map(({ _id, image }, index, arr) =>
                index < 6 ? (
                  <div
                    key={_id}
                    style={{
                      backgroundImage: `url(${image})`,
                      zIndex: arr.length - index,
                    }}
                    className={cn(styles.icon, {
                      [styles.icon_overlay]: index !== 0,
                      [styles.icon_shadow]: index === 5,
                    })}>
                    {index === 5 ? (
                      <span
                        className={cn(
                          'text text_type_digits-default',
                          styles.icon_text,
                        )}>
                        +{arr.length - 5}
                      </span>
                    ) : null}
                  </div>
                ) : null,
              )}
          </div>
          <Price
            classNameCount={'text text_type_digits-default'}
            classNameCurrency={'text text_type_main-medium'}
            price={String(resultPrice)}
          />
        </div>
      </div>
    </Link>
  )
}
