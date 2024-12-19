import { FC } from 'react'

import { Price } from '../../Price'

import styles from './FeedCard.module.css'

interface Props {
  image: string
  name: string
  price: number
  count: number
}
export const FeedCard: FC<Props> = ({ image, name, price, count }) => {
  return (
    <div className="flex-row-sb mb-4 mr-6">
      <div className={'flex-row-fs'}>
        <div
          style={{ backgroundImage: `url(${image})` }}
          className={styles.icon}
        />
        <div className={'text text_type_main-default'}>{name}</div>
      </div>
      <Price
        classNameCount={'text text_type_digits-default'}
        classNameCurrency={'text text_type_main-medium'}
        price={`${count} x ${price}`}
      />
    </div>
  )
}
