import cn from 'classnames'
import { FC } from 'react'

import styles from './Stats.module.css'

export const Stats: FC = () => {
  return (
    <div className={cn('flex-col-fs', styles.container)}>
      <div className={'flex-row-sb mb-15'}>
        <div className={'text text_type_main-medium'}>Готовы:</div>
        <div className={'text text_type_main-medium'}>В работе:</div>
      </div>
      <div className={'mb-15'}>
        <div className={'text text_type_main-medium'}>
          Выполнено за все время:
        </div>
        <div className={'text text_type_digits-large'}>28 752</div>
      </div>
      <div>
        <div className={'text text_type_main-medium'}>
          Выполнено за сегодня:
        </div>
        <div className={'text text_type_digits-large'}>138</div>
      </div>
    </div>
  )
}
