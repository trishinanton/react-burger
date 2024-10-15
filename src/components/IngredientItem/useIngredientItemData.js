import { useCallback, useState } from "react";
import { useDrag } from "react-dnd";
import { useSelector } from "react-redux";

import { selectCountIngredient } from "../../store/modules/constructor/constructor.selector";

export const useIngredientItemData = (item) => {
    const [isOpenIngredientModal, setIsOpenIngredientModal] = useState(false)

    const onClickIngredient = useCallback(() => {
        setIsOpenIngredientModal(true)
    },[])

    const onCloseIngredientModal = useCallback(() => {
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
