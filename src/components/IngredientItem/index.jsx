import { Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import cn from "classnames";
import PropTypes from "prop-types";

import { IngredientItemDefault, IngredientItemType } from "../../utils/types";
import { IngredientDetailsModal } from "../IngredientDetailsModal";
import { Price } from "../Price";
import { useIngredientItemData } from "./useIngredientItemData";

import styles from "./IngredientItem.module.css";

export const IngredientItem = ({ item, wrapperClassName, count }) => {
    const { price,name,image } = item
    const {
        isOpenIngredientModal,
        onClickIngredient,
        onCloseIngredientModal
    } = useIngredientItemData()

    return (
        <>
        <div onClick={onClickIngredient} className={cn("flex-col-fs-c", wrapperClassName, styles.container)}>
            <img src={image} alt={"logo"} />
            <Price
                classNameCurrency={styles.icon}
                classNameCount="text text_type_digits-default"
                price={price}
            />
            <span className="text text_type_main-default mt-2">{name}</span>
            <Counter className={styles.counter} count={count} size="small" />
        </div>
        {isOpenIngredientModal ? <IngredientDetailsModal
            ingredientItem={item}
            onClose={onCloseIngredientModal}
        /> : null}
        </>
    )
}

IngredientItem.propTypes = {
    item:IngredientItemType,
    wrapperClassName: PropTypes.string,
    count: PropTypes.number
}

IngredientItem.defaultProps = {
    item: IngredientItemDefault,
    count: 0,
    wrapperClassName:""
}
