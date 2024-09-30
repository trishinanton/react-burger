import { useCallback, useState } from "react";

export const useIngredientData = () => {
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
