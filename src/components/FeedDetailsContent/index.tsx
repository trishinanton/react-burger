import { FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components'
import cn from 'classnames'
import { FC } from 'react'

import { useFeedOrderData } from '../../hooks/useFeedOrderData'
import { IOrder } from '../../utils/types'
import { Price } from '../Price'
import { FeedCard } from './FeedCard'

import styles from './FeedDetailsContent.module.css'

interface Props {
  orderItem: IOrder
}
export const FeedDetailsContent: FC<Props> = ({ orderItem }) => {
  const { number, name, createdAt, status } = orderItem

  const { ingredientsEntity, resultPrice, ingredientsCount } =
    useFeedOrderData(orderItem)

  return (
    <div className={cn('flex-col-fs', styles.container)}>
      <div className={cn('text text_type_digits-default mb-10', styles.number)}>
        #{number}
      </div>
      <div className="text text_type_main-medium mb-3">{name}</div>
      <div
        className={cn('text text_type_main-default mb-15', styles.done_color)}>
        {status === 'done' ? 'Выполнен' : 'В работе'}
      </div>
      <div>
        <div className={'text text_type_main-medium mb-6'}>Состав:</div>
        <div className={cn(styles.ingredients_container, 'mb-10')}>
          {Object.values(ingredientsEntity).map(
            ({ _id, image, price, name }) => (
              <FeedCard
                key={_id}
                image={image}
                name={name}
                price={price}
                count={ingredientsCount[_id]}
              />
            ),
          )}
        </div>
      </div>
      <div className="flex-row-sb-fs">
        <FormattedDate
          className={cn('text text_type_main-default', styles.date)}
          date={new Date(createdAt)}
        />
        <Price
          classNameCount={'text text_type_digits-default'}
          classNameCurrency={'text text_type_main-medium'}
          price={String(resultPrice)}
        />
      </div>
    </div>
  )
}
