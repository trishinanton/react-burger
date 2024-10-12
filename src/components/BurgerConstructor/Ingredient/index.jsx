import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import cn from "classnames";
import PropTypes from "prop-types";
import { useCallback, useEffect } from "react";
import { useDrag, useDrop } from "react-dnd";
import { useDispatch } from "react-redux";

import { removeIngredient } from "../../../store/modules/constructor/constructor.reducer";
import { IngredientItemType } from "../../../utils/types";
import { useIngredientData } from "./useIngredientData";

import styles from "../BurgerConstructor.module.css";

export const Ingredient = ({ setHoverItemUUId, onDropHandler, item, type, isLocked, wrapperClassName }) => {
    const {
        name,
        price,
        image,
    } = item

    const dispatch = useDispatch()
    const { text } = useIngredientData(type, name)

    const onDeleteElement = useCallback(() => {
        dispatch(removeIngredient(item))
    },[])

    const [,dragRef] = useDrag({
        type: "main",
        item: { item }
    });

    const [{ isHover }, dropTarget] = useDrop({
        accept: "main",
        drop({ item }) {
            onDropHandler( item );
        },
        collect: monitor => ({
            isHover: monitor.isOver(),
        })
    });

    useEffect(() =>{
        if(isHover) {
            setHoverItemUUId(item.uuid)
        }
    },[isHover,setHoverItemUUId, item.uuid])

    return  <>
        <div ref={dragRef} className={cn(styles.ingredient, wrapperClassName)}>
        <div ref={dropTarget}>
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
    </>
}

Ingredient.propTypes = {
    item: IngredientItemType,
    type: PropTypes.string,
    isLocked: PropTypes.bool,
    wrapperClassName: PropTypes.string,
    onDropHandler: PropTypes.func,
    setHoverItemUUId: PropTypes.func
}
