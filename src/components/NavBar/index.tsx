import cn from 'classnames'
import { useCallback } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

import { useAppDispatch } from '../../hooks/appHooks'
import { fetchLogout } from '../../store/modules/user/user.reducer'

import styles from './NavBar.module.css'

export const NavBar = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const onClickLogout = useCallback(async () => {
    try {
      await dispatch(fetchLogout())
      navigate('/login')
    } catch (e) {
      return null
    }
  }, [navigate])

  return (
    <div className={cn('mr-20', styles.wrapper_left)}>
      <NavLink
        end
        to="/profile"
        className={({ isActive }) =>
          isActive
            ? cn(
                'text text_type_main-large mt-10',
                styles.link,
                styles.active_link,
              )
            : cn('text text_type_main-large mt-10', styles.link)
        }>
        Профиль
      </NavLink>
      <NavLink
        to="/profile/orders"
        className={({ isActive }) =>
          isActive
            ? cn(
                'text text_type_main-large mt-10',
                styles.link,
                styles.active_link,
              )
            : cn('text text_type_main-large mt-10', styles.link)
        }>
        История заказов
      </NavLink>
      <span
        className={cn('text text_type_main-large mt-10', styles.link)}
        onClick={onClickLogout}>
        Выход
      </span>
      <div className={'text text_type_main-small mt-20'}>
        В этом разделе вы можете <br />
        изменить свои персональные данные
      </div>
    </div>
  )
}
