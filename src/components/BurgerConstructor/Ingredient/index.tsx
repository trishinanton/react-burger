import {
  ConstructorElement,
  DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'
import cn from 'classnames'
import { FC } from 'react'

import { IIngredientItem } from '../../../utils/types'
import { useIngredientData } from './useIngredientData'

import styles from '../BurgerConstructor.module.css'

interface Props {
  setHoverItemUUId?: (uuid: string) => void
  onDropHandler?: (item: IIngredientItem) => void
  item: IIngredientItem
  type?: 'top' | 'bottom'
  isLocked?: boolean
  wrapperClassName?: string
}

export const Ingredient: FC<Props> = ({
  setHoverItemUUId = () => null,
  onDropHandler = () => null,
  item,
  type,
  isLocked,
  wrapperClassName,
}) => {
  const { name, price, image } = item

  const { text, dragRef, dropTarget, onDeleteElement } = useIngredientData({
    type,
    name,
    setHoverItemUUId,
    onDropHandler,
    item,
  })

  return (
    <div
      ref={el => {
        dragRef(el)
        dropTarget(el)
      }}
      className={cn(styles.container, 'flex-row-fs')}>
      {item.type !== 'bun' ? (
        <DragIcon className="mr-3" type="primary" />
      ) : null}
      <div className={cn(styles.ingredient, wrapperClassName)}>
        <ConstructorElement
          isLocked={isLocked}
          type={type}
          text={text}
          price={price}
          thumbnail={image}
          handleClose={onDeleteElement}
        />
      </div>
    </div>
  )
}
