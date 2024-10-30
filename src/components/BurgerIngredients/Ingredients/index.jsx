import PropTypes from 'prop-types'

import { IngredientItem } from '../../IngredientItem'
import { useIngredientsData } from './useIngredientsData'

import styles from './Ingredients.module.css'

export const Ingredients = ({ data, setCurrentTab }) => {
  const { refRoot, refBuns, refSauces, refMain, buns, sauces, main } =
    useIngredientsData({ data, setCurrentTab })

  return (
    <div ref={refRoot} className={styles.container}>
      <span ref={refBuns} className={'text text_type_main-medium mt-10'}>
        Булки
      </span>
      <div className={'flex-row-fs-w'}>
        {buns.map(item => {
          return (
            <IngredientItem
              key={item._id}
              item={item}
              wrapperClassName={styles.wrapper_ingredient}
            />
          )
        })}
      </div>

      <span ref={refSauces} className={'text text_type_main-medium mt-10'}>
        Соусы
      </span>
      <div className={'flex-row-fs-w'}>
        {sauces.map(item => (
          <IngredientItem
            key={item._id}
            item={item}
            wrapperClassName={styles.wrapper_ingredient}
          />
        ))}
      </div>

      <span ref={refMain} className={'text text_type_main-medium mt-10'}>
        Начинка
      </span>
      <div className={'flex-row-fs-w'}>
        {main.map(item => (
          <IngredientItem
            key={item._id}
            item={item}
            wrapperClassName={styles.wrapper_ingredient}
          />
        ))}
      </div>
    </div>
  )
}

Ingredients.propTypes = {
  data: PropTypes.array.isRequired,
  setCurrentTab: PropTypes.func.isRequired,
}
