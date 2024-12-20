import {
  Button,
  EmailInput,
  Input,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components'
import { FormEvent, useCallback } from 'react'
import { Link, Navigate } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../../hooks/appHooks'
import { useFormData } from '../../hooks/useFormData'
import { fetchRegister } from '../../store/modules/user/user.reducer'
import { selectHasUser } from '../../store/modules/user/user.selector'

import styles from './Register.module.css'

export const Register = () => {
  const hasUser = useAppSelector(selectHasUser)
  const dispatch = useAppDispatch()

  const { values, handleChange } = useFormData()
  const { name, email, password } = values

  const onClick = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      dispatch(fetchRegister(values))
    },
    [values],
  )

  if (hasUser) {
    return <Navigate to="/" replace />
  }

  return (
    <main className={styles.container}>
      <h1>Регистрация</h1>
      <form className={styles.container} onSubmit={onClick}>
        <Input
          onChange={handleChange}
          value={name || ''}
          name={'name'}
          placeholder="Имя"
          extraClass="mb-6"
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        />
        <EmailInput
          onChange={handleChange}
          value={email || ''}
          name={'email'}
          isIcon={false}
          extraClass="mb-6"
        />
        <PasswordInput
          onChange={handleChange}
          value={password || ''}
          name={'password'}
          placeholder="Пароль"
        />
        <Button
          htmlType="submit"
          type="primary"
          size="medium"
          extraClass="mt-6 ">
          Зарегистрироваться
        </Button>
        <div className={'mt-4'}>
          <span className={'mr-2'}>Уже зарегистрированы?</span>
          <Link to="/login">Войти</Link>
        </div>
      </form>
    </main>
  )
}
