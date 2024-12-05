import cn from 'classnames'
import { FC } from 'react'

import styles from './NutritionalValueItem.module.css'

interface Props {
  title: string
  value?: number
}

export const NutritionalValueItem: FC<Props> = ({ title, value }) => {
  return (
    <div className={cn(styles.container, 'mr-5')}>
      <span className={'text text_type_main-small'}>{title}</span>
      <span className={'text text_type_digits-default'}>{value}</span>
    </div>
  )
}
