import PropTypes from "prop-types";

import { IngredientItem } from "../../IngredientItem";

import styles from "./Ingredients.module.css";

export const Ingredients = ({ data }) => {
    const buns = data.filter(({ type }) => type === "bun")
    const sauces = data.filter(({ type }) => type === "sauce")
    const main = data.filter(({ type }) => type === "main")

  return (
    <div className={styles.container}>
      <span className={"text text_type_main-medium mt-10"}>Булки</span>
      <div className={"flex-row-fs-w"}>
        {buns.map(item => {
            return (
                <IngredientItem
                    key={item._id}
                    item={item}
                    count={1}
                    wrapperClassName={styles.wrapper_ingredient}
                />
            )
        })}
      </div>

      <span className={"text text_type_main-medium mt-10"}>Соусы</span>
      <div className={"flex-row-fs-w"}>
        {sauces.map(item => (
          <IngredientItem
            key={item._id}
            item={item}
            count={1}
            wrapperClassName={styles.wrapper_ingredient}
          />
        ))}
      </div>

      <span className={"text text_type_main-medium mt-10"}>Начинка</span>
      <div className={"flex-row-fs-w"}>
        {main.map(item => (
          <IngredientItem
            key={item._id}
            item={item}
            count={1}
            wrapperClassName={styles.wrapper_ingredient}
          />
        ))}
      </div>
    </div>
  )
}

Ingredients.propTypes = {
    data: PropTypes.array.isRequired
}
