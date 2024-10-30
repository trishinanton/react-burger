import {
  Button,
  EmailInput,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components'
import cn from 'classnames'
import { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate, useLocation } from 'react-router-dom'

import { fetchLogin } from '../../store/modules/user/user.reducer'
import { selectHasUser } from '../../store/modules/user/user.selector'

import styles from './SignIn.module.css'

export const SignIn = () => {
  const { state } = useLocation()
  const hasUser = useSelector(selectHasUser)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const onChangeEmail = useCallback(e => {
    setEmail(e.target.value)
  }, [])
  const onChangePassword = useCallback(e => {
    setPassword(e.target.value)
  }, [])

  const dispatch = useDispatch()

  const onClick = useCallback(
    e => {
      e.preventDefault()
      dispatch(fetchLogin({ email, password }))
    },
    [email, password],
  )

  if (hasUser) {
    return <Navigate to={state?.pathname ? state.pathname : '/'} replace />
  }

  return (
    <main>
      <h1>Вход</h1>
      <form onSubmit={onClick}>
        <div className={styles.container}>
          <EmailInput
            onChange={onChangeEmail}
            value={email}
            name={'email'}
            placeholder="E-mail"
            isIcon={false}
            extraClass="mb-2"
          />
          <PasswordInput
            onChange={onChangePassword}
            value={password}
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
        </div>
      </form>
    </main>
  )
}
