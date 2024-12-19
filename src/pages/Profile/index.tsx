import {
  Button,
  EmailInput,
  Input,
} from '@ya.praktikum/react-developer-burger-ui-components'
import { ChangeEvent, FC, useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { NavBar } from '../../components/NavBar'
import { AppDispatch } from '../../index'
import { fetchUpdateUser } from '../../store/modules/user/user.reducer'
import {
  selectEmailUser,
  selectNameUser,
} from '../../store/modules/user/user.selector'

import styles from './Profile.module.css'

export const Profile: FC = () => {
  const dispatch = useDispatch<AppDispatch>()

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
        <NavBar />
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
