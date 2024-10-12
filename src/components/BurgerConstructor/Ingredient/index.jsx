import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import cn from "classnames";
import PropTypes from "prop-types";

import { IngredientItemType } from "../../../utils/types";
import { useIngredientData } from "./useIngredientData";

import styles from "../BurgerConstructor.module.css";

export const Ingredient = ({ setHoverItemUUId, onDropHandler, item, type, isLocked, wrapperClassName }) => {
    const {
        name,
        price,
        image,
    } = item

    const {
        text,
        dragRef,
        dropTarget,
        onDeleteElement
    } = useIngredientData({
        type,
        name,
        setHoverItemUUId,
        onDropHandler,
        item
    })

    return  <div
        ref={(el)=> {dragRef(el); dropTarget(el);}}
        className={cn(styles.container,"flex-row-fs")}
    >
        {item.type !== "bun" ? <DragIcon className="mr-3" type="primary" /> : null}
        <div className={cn(styles.ingredient, wrapperClassName)}>
            <ConstructorElement
                isLocked={isLocked}
                type={type}
                text={text}
                price={price}
                thumbnail={image}
                handleClose={onDeleteElement}
            />
        </div>
    </div>
}

Ingredient.propTypes = {
    item: IngredientItemType,
    type: PropTypes.string,
    isLocked: PropTypes.bool,
    wrapperClassName: PropTypes.string,
    onDropHandler: PropTypes.func,
    setHoverItemUUId: PropTypes.func
}
