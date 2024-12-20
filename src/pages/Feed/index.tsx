import { FC, useEffect } from 'react'

import { OrdersList } from '../../components/OrdersList'
import { Stats } from '../../components/Stats'
import { useAppDispatch } from '../../hooks/appHooks'
import {
  wsConnectionClosed,
  wsConnectionStart,
} from '../../store/modules/ws/ws.reducer'
import { wsUrlAll } from '../../utils/wsUrls'

export const Feed: FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(wsConnectionStart(wsUrlAll))

    return () => {
      dispatch(wsConnectionClosed())
    }
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
