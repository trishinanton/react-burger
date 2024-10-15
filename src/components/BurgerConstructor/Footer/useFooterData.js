import { useCallback, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
    selectAllCount,
    selectConstructorIds,
    selectConstructorList,
    selectCurrentBun
} from "../../../store/modules/constructor/constructor.selector";
import { createOrder } from "../../../store/modules/order/order.reducer";

export const useFooterData = () => {
    const [isOpenOrderModal, setIsOpenOrderModal] = useState(false)
    const dispatch = useDispatch()

    const ids = useSelector(selectConstructorIds)
    const uniqueObjectIds = useSelector(selectAllCount)
    const list = useSelector(selectConstructorList)
    const currentBun = useSelector(selectCurrentBun) || {}

    const onClickOrder = useCallback(() => {
        const uniqueIds = Object.keys(uniqueObjectIds)

        dispatch(createOrder([...uniqueIds, currentBun._id]))
        setIsOpenOrderModal(true)
    },[uniqueObjectIds])

    const onCloseOrderModal = useCallback(() => {
        setIsOpenOrderModal(false)
    },[])

    const price = useMemo(() => ids.reduce((acc, id) => {
        const item = list.find(({ uuid }) => uuid === id)

        if(item) {
            const { price } = item

            return  acc + price
        }

        return acc
    } ,0), [ids, list])

    const commonPrice = (currentBun.price || 0) + price

    return {
        isOpenOrderModal,
        onClickOrder,
        onCloseOrderModal,
        commonPrice
    }
}
