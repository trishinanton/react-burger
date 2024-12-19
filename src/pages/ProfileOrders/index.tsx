import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { NavBar } from '../../components/NavBar'
import { OrdersList } from '../../components/OrdersList'
import { COOKIE_ACCESS_TOKEN } from '../../constants/cookies'
import { AppDispatch } from '../../index'
import {
  wsConnectionClosed,
  wsConnectionStart,
} from '../../store/modules/ws/ws.reducer'
import { getCookie } from '../../utils/cookies'
import { wsUrl } from '../../utils/wsUrls'

import styles from './ProfileOrders.module.css'

export const ProfileOrders = () => {
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(
      wsConnectionStart(
        wsUrl +
          `?token=${(getCookie(COOKIE_ACCESS_TOKEN) || '').slice('Bearer%'.length)}`,
      ),
    )

    return () => {
      dispatch(wsConnectionClosed())
    }
  }, [])

  return (
    <div className={styles.wrapper}>
      <NavBar />
      <div className={styles.container}>
        <OrdersList isProfileOrdersPage />
      </div>
    </div>
  )
}