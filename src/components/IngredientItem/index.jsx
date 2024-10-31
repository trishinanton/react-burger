import { Counter } from '@ya.praktikum/react-developer-burger-ui-components'
import cn from 'classnames'
import PropTypes from 'prop-types'
import { Link, useLocation } from 'react-router-dom'

import { IngredientItemType } from '../../utils/types'
import { Price } from '../Price'
import { useIngredientItemData } from './useIngredientItemData'

import styles from './IngredientItem.module.css'

export const IngredientItem = ({ item, wrapperClassName }) => {
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
            price={price}
          />
          <span className="text text_type_main-default mt-2">{name}</span>
          {count ? (
            <Counter className={styles.counter} count={count} size="small" />
          ) : null}
        </div>
      </Link>
    </>
  )
}

IngredientItem.propTypes = {
  item: IngredientItemType,
  wrapperClassName: PropTypes.string,
}
