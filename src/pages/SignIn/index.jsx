import {
  Button,
  EmailInput,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components'
import cn from 'classnames'
import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate, useLocation } from 'react-router-dom'

import { useFormData } from '../../hooks/useFormData'
import { fetchLogin } from '../../store/modules/user/user.reducer'
import { selectHasUser } from '../../store/modules/user/user.selector'

import styles from './SignIn.module.css'

export const SignIn = () => {
  const { state } = useLocation()
  const hasUser = useSelector(selectHasUser)
  const { values, handleChange } = useFormData()
  const { email, password } = values

  const dispatch = useDispatch()

  const onClick = useCallback(
    e => {
      e.preventDefault()
      dispatch(fetchLogin(values))
    },
    [values],
  )

  if (hasUser) {
    return <Navigate to={state?.pathname ? state.pathname : '/'} replace />
  }

  return (
    <main className={styles.container}>
      <h1>Вход</h1>
      <form onSubmit={onClick} className={styles.container}>
        <EmailInput
          onChange={handleChange}
          value={email || ''}
          name={'email'}
          placeholder="E-mail"
          isIcon={false}
          extraClass="mb-2"
        />
        <PasswordInput
          onChange={handleChange}
          value={password || ''}
          name={'password'}
        />
        <Button
          htmlType="submit"
          type="primary"
          size="medium"
          extraClass={cn('mt-6 mb-20', styles.button)}>
          Войти
        </Button>
        <div>
          <span className={'mr-4'}>Вы - новый пользователь?</span>
          <Link to="/register" className={styles.link}>
            Зарегистрироваться
          </Link>
        </div>
        <div className={'mt-4'}>
          <span className={'mr-4'}>Забыли пароль?</span>
          <Link to="/forgot-password" className={styles.link}>
            Восстановить пароль
          </Link>
        </div>
      </form>
    </main>
  )
}
