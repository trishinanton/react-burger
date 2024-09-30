import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

import { IngredientDetailsModal } from "../../IngredientDetailsModal";
import { useIngredientData } from "./useIngredientData";

import styles from "../BurgerConstructor.module.css";

export const Ingredient = ({
                               name,
                               price,
                               image,
                               calories,
                               proteins,
                               fat,
                               carbohydrates,
                           }) => {
    const {
        isOpenIngredientModal,
        onClickIngredient,
        onCloseIngredientModal
    } = useIngredientData()

    return  <>
        <div className={styles.ingredient} onClick={onClickIngredient}>
        <ConstructorElement
            type={"top"}
            isLocked={true}
            text={name}
            price={price}
            thumbnail={image}
        />
        </div>
        {isOpenIngredientModal ? <IngredientDetailsModal
            image={image}
            name={name}
            calories={calories}
            proteins={proteins}
            fat={fat}
            carbohydrates={carbohydrates}
            onClose={onCloseIngredientModal}
        /> : null}
    </>
}

Ingredient.propTypes = {
    name: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
    calories: PropTypes.number,
    proteins: PropTypes.number,
    fat: PropTypes.number,
    carbohydrates: PropTypes.number,
}

Ingredient.defaultProps = {
    name:"",
    price: 0,
    image: "",
    calories: 0,
    proteins: 0,
    fat: 0,
    carbohydrates: 0
}
