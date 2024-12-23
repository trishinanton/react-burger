import { useCallback, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../../../hooks/appHooks'
import {
  selectAllCount,
  selectConstructorIds,
  selectConstructorList,
  selectCurrentBun,
} from '../../../store/modules/constructor/constructor.selector'
import { createOrder } from '../../../store/modules/order/order.reducer'
import { selectHasUser } from '../../../store/modules/user/user.selector'
import { IIngredientItem } from '../../../utils/types'

export const useFooterData = () => {
  const hasUser = useAppSelector(selectHasUser)
  const navigate = useNavigate()
  const [isOpenOrderModal, setIsOpenOrderModal] = useState(false)
  const dispatch = useAppDispatch()

  const ids = useAppSelector(selectConstructorIds)
  const uniqueObjectIds = useAppSelector(selectAllCount)
  const list = useAppSelector(selectConstructorList)
  const currentBun = useAppSelector(selectCurrentBun)

  const onClickOrder = useCallback(() => {
    if (!hasUser) {
      return navigate('/login')
    }
    const uniqueIds = Object.keys(uniqueObjectIds)

    if (currentBun?._id) {
      dispatch(createOrder([...uniqueIds, currentBun?._id]))
      setIsOpenOrderModal(true)
    }
  }, [uniqueObjectIds, hasUser, navigate])

  const onCloseOrderModal = useCallback(() => {
    setIsOpenOrderModal(false)
  }, [])

  const price = useMemo(
    () =>
      ids.reduce((acc, id) => {
        const item = list.find(({ uuid }) => uuid === id)

        if (item) {
          const { price } = item

          return acc + price
        }

        return acc
      }, 0),
    [ids, list],
  )

  const commonPrice = ((currentBun as IIngredientItem).price || 0) + price

  return {
    isOpenOrderModal,
    onClickOrder,
    onCloseOrderModal,
    commonPrice,
  }
}
