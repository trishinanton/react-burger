import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import cn from 'classnames'
import { FC } from 'react'

import styles from './Price.module.css'

interface Props {
  classNameCount: string
  classNameCurrency: string
  price: string
}
export const Price: FC<Props> = ({
  classNameCount,
  classNameCurrency,
  price,
}) => (
  <div className={'flex-row-fs'}>
    <p className={cn(classNameCount, styles.price)}>{price}</p>
    <CurrencyIcon className={classNameCurrency} type="primary" />
  </div>
)
