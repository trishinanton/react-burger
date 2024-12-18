import {
  Button,
  EmailInput,
  Input,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components'
import { FormEvent, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate } from 'react-router-dom'

import { useFormData } from '../../hooks/useFormData'
import { fetchRegister } from '../../store/modules/user/user.reducer'
import { selectHasUser } from '../../store/modules/user/user.selector'

import styles from './Register.module.css'

interface IRegister {
  name: string
  email: string
  password: string
}

export const Register = () => {
  const hasUser = useSelector(selectHasUser)
  const dispatch = useDispatch()

  const { values, handleChange } = useFormData()
  const { name, email, password } = values

  const onClick = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      //todo - типизировать стор
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      dispatch(fetchRegister<IRegister>(values))
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
