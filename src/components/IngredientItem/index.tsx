import { Counter } from '@ya.praktikum/react-developer-burger-ui-components'
import cn from 'classnames'
import { FC } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { IIngredientItem } from '../../utils/types'
import { Price } from '../Price'
import { useIngredientItemData } from './useIngredientItemData'

import styles from './IngredientItem.module.css'

interface Props {
  item: IIngredientItem
  wrapperClassName?: string
}
export const IngredientItem: FC<Props> = ({ item, wrapperClassName }) => {
  const { price, name, image } = item
  const location = useLocation()
  const { dragRef, count } = useIngredientItemData(item)

  return (
    <>
      <Link
        to={`/ingredients/${item._id}`}
        state={{ background: location }}
        className={cn('flex-col-fs-c', styles.link, wrapperClassName)}>
        <div ref={dragRef} className={cn(styles.container)}>
          <img src={image} alt={'logo'} />
          <Price
            classNameCurrency={styles.icon}
            classNameCount="text text_type_digits-default"
            price={String(price)}
          />
          <span className="text text_type_main-default mt-2">{name}</span>
          {count ? (
            <Counter extraClass={styles.counter} count={count} size="small" />
          ) : null}
        </div>
      </Link>
    </>
  )
}
