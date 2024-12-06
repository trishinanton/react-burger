import {
  Button,
  EmailInput,
  Input,
} from '@ya.praktikum/react-developer-burger-ui-components'
import cn from 'classnames'
import { ChangeEvent, FC, useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'

import { AppDispatch } from '../../index'
import {
  fetchLogout,
  fetchUpdateUser,
} from '../../store/modules/user/user.reducer'
import {
  selectEmailUser,
  selectNameUser,
} from '../../store/modules/user/user.selector'

import styles from './Profile.module.css'

export const Profile: FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()

  const onClickLogout = useCallback(async () => {
    try {
      await dispatch(fetchLogout())
      navigate('/login')
    } catch (e) {
      return null
    }
  }, [navigate])

  const curName = useSelector(selectNameUser)
  const curEmail = useSelector(selectEmailUser)

  const [name, setName] = useState(curName)
  const [email, setEmail] = useState(curEmail)

  const onChangeName = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }, [])

  const onChangeEmail = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }, [])

  const onClickChange = useCallback(() => {
    dispatch(fetchUpdateUser({ email, name }))
  }, [email, name])

  const onClickCancel = useCallback(() => {
    setName(curName)
    setEmail(curEmail)
  }, [curName, curEmail])

  const isHideBtn = curName === name && curEmail === email

  return (
    <main>
      <div className={styles.wrapper}>
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
        <div className={styles.container}>
          <Input
            onChange={onChangeName}
            value={name}
            name={'name'}
            placeholder="Имя"
            extraClass="mb-6"
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          />
          <EmailInput
            onChange={onChangeEmail}
            value={email}
            name={'email'}
            isIcon={false}
            extraClass="mb-6"
          />
          {!isHideBtn ? (
            <>
              <Button
                htmlType="button"
                type="primary"
                size="medium"
                onClick={onClickChange}>
                Сохранить
              </Button>
              <Button
                htmlType="button"
                type="secondary"
                size="medium"
                onClick={onClickCancel}>
                Отмена
              </Button>
            </>
          ) : null}
        </div>
      </div>
    </main>
  )
}
