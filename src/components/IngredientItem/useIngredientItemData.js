import { useCallback, useEffect, useState } from "react";
import { useDrag } from "react-dnd";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

import { selectCountIngredient } from "../../store/modules/constructor/constructor.selector";

export const useIngredientItemData = (item) => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [isOpenIngredientModal, setIsOpenIngredientModal] = useState(false)

    useEffect(() => {
        if(searchParams.get("ingredientId")===item._id) {
            setIsOpenIngredientModal(true)
        }
    },[item._id, searchParams])

    const onClickIngredient = useCallback(() => {
        setSearchParams({ ingredientId: item._id })
        setIsOpenIngredientModal(true)
    },[])

    const onCloseIngredientModal = useCallback(() => {
        setSearchParams(undefined)
        setIsOpenIngredientModal(false)
    },[])

    const getCountIngredient = useCallback(state => selectCountIngredient(state, item._id), [item._id]);
    const count = useSelector(getCountIngredient)

    const [,dragRef] = useDrag({
        type: "ingredient",
        item: { item }
    });

    return {
        isOpenIngredientModal,
        onClickIngredient,
        onCloseIngredientModal,
        dragRef,
        count
    }
}
