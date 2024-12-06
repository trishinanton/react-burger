import cn from 'classnames'
import { FC } from 'react'

import { IIngredientItem } from '../../utils/types'
import { NutritionalValueItem } from './NutritionalValueItem'

import styles from './IngredientDetailsContent.module.css'

interface Props {
  ingredientItem?: IIngredientItem
}
export const IngredientDetailsContent: FC<Props> = ({
  ingredientItem = {},
}) => {
  const { name, image_large, calories, proteins, fat, carbohydrates } =
    ingredientItem

  return (
    <div className={styles.content}>
      <span className={'text text_type_main-large'}>Детали ингредиента</span>
      <img src={image_large} alt={image_large} />
      <span className="text text_type_main-medium mt-4">{name}</span>
      <div className={cn(styles.container_ingredient, 'mt-8')}>
        <NutritionalValueItem title={'Калории,ккал'} value={calories} />
        <NutritionalValueItem title={'Белки, г'} value={proteins} />
        <NutritionalValueItem title={'Жиры, г'} value={fat} />
        <NutritionalValueItem title={'Углеводы, г'} value={carbohydrates} />
      </div>
    </div>
  )
}
