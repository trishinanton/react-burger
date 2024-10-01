import { useCallback, useMemo, useState } from "react";

export const useIngredientData = (type, name) => {
    const [isOpenIngredientModal, setIsOpenIngredientModal] = useState(false)

    const onClickIngredient = useCallback(() => {
        setIsOpenIngredientModal(true)
    },[])

    const onCloseIngredientModal = useCallback(() => {
        setIsOpenIngredientModal(false)
    },[])

    const text = useMemo(() => {
        if(type === "top") {
            return name + " (верх)"
        }

        if(type === "bottom") {
            return name + " (низ)"
        }

        return name
    }, [type, name])

    return {
        isOpenIngredientModal,
        onClickIngredient,
        onCloseIngredientModal,
        text
    }
}
