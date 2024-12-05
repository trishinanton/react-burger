import {
  Button,
  Input,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components'
import { FormEvent, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'

import { postResetPassword } from '../../api'
import { useFormData } from '../../hooks/useFormData'
import { selectHasUser } from '../../store/modules/user/user.selector'

import styles from './ResetPassword.module.css'

interface IResetPassword {
  password: string
  token: string
}
export const ResetPassword = () => {
  const hasUser = useSelector(selectHasUser)
  const navigate = useNavigate()
  const { state } = useLocation()

  const { values, handleChange } = useFormData()
  const { password, token } = values

  const onClick = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      try {
        await postResetPassword<IResetPassword>(values)
        navigate('/login')
      } catch (e) {
        return null
      }
    },
    [values],
  )

  if (hasUser || !state?.isCheck) {
    return <Navigate to="/" replace />
  }

  return (
    <main className={styles.container}>
      <h1>Восстановление пароля</h1>
      <form className={styles.container} onSubmit={onClick}>
        <PasswordInput
          onChange={handleChange}
          value={password || ''}
          name={'password'}
          placeholder="Введите новый пароль"
          extraClass="mb-6"
        />
        <Input
          onChange={handleChange}
          value={token || ''}
          name={'token'}
          placeholder="Введите код из письма"
          extraClass="mb-6"
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        />
        <Button htmlType="submit" type="primary" size="medium">
          Сохранить
        </Button>
        <div className={'mt-4'}>
          <span>Вспомнили пароль?</span>
          <Link to="/login">Войти</Link>
        </div>
      </form>
    </main>
  )
}
