import cn from "classnames";

import { IngredientItemType } from "../../utils/types";
import { NutritionalValueItem } from "./NutritionalValueItem";

import styles from "./IngredientDetailsContent.module.css";

export const IngredientDetailsContent = ({ ingredientItem }) => {
    const {
        name,
        image,
        calories,
        proteins,
        fat,
        carbohydrates
    } = ingredientItem

    return <div className={styles.content}>
        <span className={"text text_type_main-large"}>Детали ингредиента</span>
        <img src={image} alt={name}/>
        <span className="text text_type_main-medium mt-4">{name}</span>
        <div className={cn(styles.container_ingredient, "mt-8")}>
            <NutritionalValueItem title={"Калории,ккал"} value={calories} />
            <NutritionalValueItem title={"Белки, г"} value={proteins} />
            <NutritionalValueItem title={"Жиры, г"} value={fat} />
            <NutritionalValueItem title={"Углеводы, г"} value={carbohydrates} />
        </div>
    </div>
}

IngredientDetailsContent.propTypes = {
    ingredientItem: IngredientItemType
}
