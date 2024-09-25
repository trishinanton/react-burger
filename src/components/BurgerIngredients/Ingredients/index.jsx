import { data } from "../../../store";
import { IngredientItem } from "../../IngredientItem";

import styles from "./Ingredients.module.css";

const buns = data.filter(({ type }) => type === "bun")
const sauces = data.filter(({ type }) => type === "sauce")
const main = data.filter(({ type }) => type === "main")

export const Ingredients = () => {
  return (
    <div className={styles.container}>
      <span className={"text text_type_main-medium margin-top-40"}>Булки</span>
      <div className={"flex-row-fs-w"}>
        {buns.map(({ _id, price, name, image }) => (
          <IngredientItem
            key={_id}
            price={price}
            name={name}
            image={image}
            count={1}
            wrapperClassName={styles.wrapper_ingredient}
          />
        ))}
      </div>

      <span className={"text text_type_main-medium margin-top-40"}>Соусы</span>
      <div className={"flex-row-fs-w"}>
        {sauces.map(({ _id, price, name, image }) => (
          <IngredientItem
            key={_id}
            price={price}
            name={name}
            image={image}
            count={1}
            wrapperClassName={styles.wrapper_ingredient}
          />
        ))}
      </div>

      <span className={"text text_type_main-medium margin-top-40"}>Начинка</span>
      <div className={"flex-row-fs-w"}>
        {main.map(({ _id, price, name, image }) => (
          <IngredientItem
            key={_id}
            price={price}
            name={name}
            image={image}
            count={1}
            wrapperClassName={styles.wrapper_ingredient}
          />
        ))}
      </div>
    </div>
  )
}
