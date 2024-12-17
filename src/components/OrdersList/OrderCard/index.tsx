import { FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components'
import cn from 'classnames'
import { FC } from 'react'

import { Price } from '../../Price'

import styles from './OrderCard.module.css'

interface Props {
  number: number
  name: string
  createdAt: string
  price: number
  ingredients: string[]
}
export const OrderCard: FC<Props> = ({
  number,
  name,
  createdAt,
  price,
  ingredients,
}) => {
  return (
    <div className={cn('p-6 mb-4', styles.wrapper)}>
      <div className={cn('flex-row-sb', 'mb-6')}>
        <span className="text text_type_digits-default">#{number}</span>
        <FormattedDate
          className="text text_type_main-default"
          date={new Date(createdAt)}
        />
      </div>
      <div className="text text_type_main-medium mb-6">{name}</div>
      <div className={'flex-row-sb'}>
        <div className={'flex-row'}>
          {ingredients.map((id, index) =>
            index < 6 ? (
              <div
                key={id}
                style={{
                  backgroundImage:
                    'url(https://code.s3.yandex.net/react/code/bun-02.png)',
                  zIndex: ingredients.length - index,
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
                    +{ingredients.length - 5}
                  </span>
                ) : null}
              </div>
            ) : null,
          )}
        </div>
        <Price
          classNameCount={'text text_type_digits-default'}
          classNameCurrency={'text text_type_main-medium'}
          price={price}
        />
      </div>
    </div>
  )
}
