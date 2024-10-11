import { useCallback, useState } from "react";

export const useIngredientItemData = () => {
    const [isOpenIngredientModal, setIsOpenIngredientModal] = useState(false)

    const onClickIngredient = useCallback(() => {
        setIsOpenIngredientModal(true)
    },[])

    const onCloseIngredientModal = useCallback(() => {
        setIsOpenIngredientModal(false)
    },[])

    return {
        isOpenIngredientModal,
        onClickIngredient,
        onCloseIngredientModal
    }
}
