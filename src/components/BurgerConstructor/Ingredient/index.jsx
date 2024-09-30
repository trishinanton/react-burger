import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import cn from "classnames";
import PropTypes from "prop-types";

import { IngredientItemDefault, IngredientItemType } from "../../../utils/types";
import { IngredientDetailsModal } from "../../IngredientDetailsModal";
import { useIngredientData } from "./useIngredientData";

import styles from "../BurgerConstructor.module.css";

export const Ingredient = ({ ingredientItem, type, isLocked, wrapperClassName }) => {
    const {
        name,
        price,
        image,
    } = ingredientItem

    const {
        isOpenIngredientModal,
        onClickIngredient,
        onCloseIngredientModal,
        text
    } = useIngredientData(type, name)


    return  <>
        <div className={cn(styles.ingredient, wrapperClassName)} onClick={onClickIngredient}>
        <ConstructorElement
            isLocked={isLocked}
            type={type}
            text={text}
            price={price}
            thumbnail={image}
        />
        </div>
        {isOpenIngredientModal ? <IngredientDetailsModal
            ingredientItem={ingredientItem}
            onClose={onCloseIngredientModal}
        /> : null}
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
