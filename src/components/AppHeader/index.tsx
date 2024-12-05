import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'
import cn from 'classnames'
import { FC } from 'react'
import { NavLink } from 'react-router-dom'

import styles from './AppHeader.module.css'

export const AppHeader: FC = () => {
  return (
    <header className={cn('flex-row-sb', styles.container)}>
      <div className={'flex-row-fs'}>
        <NavLink
          to={'/'}
          className={({ isActive }) =>
            isActive
              ? cn('flex-row-fs', styles.item, styles.active_link)
              : cn('flex-row-fs', styles.item)
          }>
          <BurgerIcon type="primary" />
          <span className={'ml-2'}>Конструктор</span>
        </NavLink>
        <NavLink
          to={'/profile/orders'}
          className={({ isActive }) =>
            isActive
              ? cn('flex-row-fs', styles.item, styles.active_link)
              : cn('flex-row-fs', styles.item)
          }>
          <ListIcon type="secondary" />
          <span className={'ml-2'}>Лента заказов</span>
        </NavLink>
      </div>
      <Logo />

      <NavLink
        end
        to={'/profile'}
        className={({ isActive }) =>
          isActive
            ? cn('flex-row-fs', styles.item, styles.active_link)
            : cn('flex-row-fs', styles.item)
        }>
        <ProfileIcon type="secondary" />
        <span className={'ml-2'}>Личный кабинет</span>
      </NavLink>
    </header>
  )
}
