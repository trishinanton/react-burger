import { FC } from 'react'

import { OrdersList } from '../../components/OrdersList'
import { Stats } from '../../components/Stats'

export const Feed: FC = () => {
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
