import { Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import cn from "classnames";
import PropTypes from "prop-types";
import { useCallback } from "react";
import { useDrag } from "react-dnd";
import { useSelector } from "react-redux";

import { selectCountIngredient } from "../../store/modules/constructor/constructor.selector";
import { IngredientItemDefault, IngredientItemType } from "../../utils/types";
import { IngredientDetailsModal } from "../IngredientDetailsModal";
import { Price } from "../Price";
import { useIngredientItemData } from "./useIngredientItemData";

import styles from "./IngredientItem.module.css";

export const IngredientItem = ({ item, wrapperClassName }) => {
    const { price,name,image,_id } = item
    const {
        isOpenIngredientModal,
        onClickIngredient,
        onCloseIngredientModal
    } = useIngredientItemData()

    const getCountIngredient = useCallback(state => selectCountIngredient(state, _id), [_id]);
    const count = useSelector(getCountIngredient)

    const [,dragRef] = useDrag({
        type: "ingredient",
        item: { item }
    });

    return (
        <>
        <div
            ref={dragRef}
            onClick={onClickIngredient}
            className={cn("flex-col-fs-c", wrapperClassName, styles.container)}>
            <img src={image} alt={"logo"} />
            <Price
                classNameCurrency={styles.icon}
                classNameCount="text text_type_digits-default"
                price={price}
            />
            <span className="text text_type_main-default mt-2">{name}</span>
            {count ? <Counter className={styles.counter} count={count} size="small" /> : null }
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
}

IngredientItem.defaultProps = {
    item: IngredientItemDefault,
    wrapperClassName:""
}
