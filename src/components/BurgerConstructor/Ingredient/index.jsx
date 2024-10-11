import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import cn from "classnames";
import PropTypes from "prop-types";
import { useCallback, useEffect } from "react";
import { useDrag, useDrop } from "react-dnd";
import { useDispatch } from "react-redux";

import { removeIngredient } from "../../../store/modules/constructor/constructor.reducer";
import { IngredientItemDefault, IngredientItemType } from "../../../utils/types";
import { useIngredientData } from "./useIngredientData";

import styles from "../BurgerConstructor.module.css";

export const Ingredient = ({ setHoverItemId, onDropHandler, item, type, isLocked, wrapperClassName }) => {
    const {
        name,
        price,
        image,
    } = item

    const dispatch = useDispatch()
    const { text } = useIngredientData(type, name)

    const onDeleteElement = useCallback(() => {
        dispatch(removeIngredient(item._id))
    },[])

    const [,dragRef] = useDrag({
        type: "main",
        item: { item },
        collect: monitor => ({
            isDrag: monitor.isDragging()
        })
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
            setHoverItemId(item._id)
        }
    },[isHover,setHoverItemId])

    // useEffect(() => {
    //     if(isDrag) {
    //         onDeleteElement()
    //     }
    // },[isDrag, onDeleteElement])

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
    setHoverItemId: PropTypes.func
}

Ingredient.defaultProps = {
    item: IngredientItemDefault,
    type: "",
    isLocked: false,
    wrapperClassName: "",
    onDropHandler: Function.prototype,
    setHoverItemId: Function.prototype
}
