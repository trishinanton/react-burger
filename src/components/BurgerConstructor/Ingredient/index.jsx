import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import cn from "classnames";
import PropTypes from "prop-types";

import { IngredientItemDefault, IngredientItemType } from "../../../utils/types";
import { useIngredientData } from "./useIngredientData";

import styles from "../BurgerConstructor.module.css";

export const Ingredient = ({ ingredientItem, type, isLocked, wrapperClassName }) => {
    const {
        name,
        price,
        image,
    } = ingredientItem

    const { text } = useIngredientData(type, name)

    return  <>
        <div className={cn(styles.ingredient, wrapperClassName)}>
        <ConstructorElement
            isLocked={isLocked}
            type={type}
            text={text}
            price={price}
            thumbnail={image}
        />
        </div>
    </>
}

Ingredient.propTypes = {
    ingredientItem: IngredientItemType,
    type: PropTypes.string,
    isLocked: PropTypes.bool,
    wrapperClassName: PropTypes.string
}

Ingredient.defaultProps = {
    ingredientItem: IngredientItemDefault,
    type: "",
    isLocked: false,
    wrapperClassName: ""
}
