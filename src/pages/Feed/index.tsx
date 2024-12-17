import { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { OrdersList } from '../../components/OrdersList'
import { Stats } from '../../components/Stats'
import { wsConnectionStart } from '../../store/modules/ws/ws.reducer'

export const Feed: FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(wsConnectionStart())
  }, [])

  return (
    <main>
      <h1 className="h1">Лента заказов</h1>
      <div className="flex-row-sb-fs">
        <OrdersList />
        <Stats />
      </div>
    </main>
  )
}
