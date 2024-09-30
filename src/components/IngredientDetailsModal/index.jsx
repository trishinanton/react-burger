import cn from "classnames";
import PropTypes from "prop-types";

import { Modal } from "../Modal";
import { NutritionalValueItem } from "./NutritionalValueItem";

import styles from "./IngredientDetailsModal.module.css";

export const IngredientDetailsModal = ({
                                    onClose,
                                    name,
                                    image,
                                    calories,
                                    proteins,
                                    fat,
                                    carbohydrates,
                                }) => {
    return <Modal isOpen onClose={onClose}>
        <div className={styles.content}>
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
    </Modal>
}

IngredientDetailsModal.propTypes = {
    onClose: PropTypes.func.isRequired,
    name: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
    calories: PropTypes.number,
    proteins: PropTypes.number,
    fat: PropTypes.number,
    carbohydrates: PropTypes.number,
};

IngredientDetailsModal.defaultProps = {
    name:"",
    price: 0,
    image: "",
    calories: 0,
    proteins: 0,
    fat: 0,
    carbohydrates: 0
}
