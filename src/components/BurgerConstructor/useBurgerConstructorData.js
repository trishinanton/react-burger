import { useCallback, useState } from "react";

export const useBurgerConstructorData = () => {
    const [isOpenOrderModal, setIsOpenOrderModal] = useState(false)

    const onClickOrder = useCallback(() => {
        setIsOpenOrderModal(true)
    },[])

    const onCloseOrderModal = useCallback(() => {
        setIsOpenOrderModal(false)
    },[])

    return {
        isOpenOrderModal,
        onClickOrder,
        onCloseOrderModal
    }
}
