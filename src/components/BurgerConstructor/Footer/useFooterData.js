import { useCallback, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
    selectAllCount,
    selectConstructorIds,
    selectConstructorList, selectCurrentBun
} from "../../../store/modules/constructor/constructor.selector";
import { createOrder } from "../../../store/modules/order/order.reducer";

export const useFooterData = () => {
    const [isOpenOrderModal, setIsOpenOrderModal] = useState(false)
    const dispatch = useDispatch()

    const ids = useSelector(selectConstructorIds)
    const list = useSelector(selectConstructorList)
    const counts =useSelector(selectAllCount)
    const currentBun = useSelector(selectCurrentBun) || {}

    const onClickOrder = useCallback(() => {
        dispatch(createOrder([...ids, currentBun._id]))
        setIsOpenOrderModal(true)
    },[ids])

    const onCloseOrderModal = useCallback(() => {
        setIsOpenOrderModal(false)
    },[])

    const price = useMemo(() => ids.reduce((acc, id) => {
        const item = list.find(({ _id }) => _id === id)

        if(item) {
            const { price } = item
            const count = (counts[id] || 1)

            return  acc + price * count
        }

        return acc
    } ,0), [ids, list, counts])

    const commonPrice = (currentBun.price || 0) + price

    return {
        isOpenOrderModal,
        onClickOrder,
        onCloseOrderModal,
        commonPrice
    }
}
