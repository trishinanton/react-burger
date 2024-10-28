import { Button, Input, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";

import { postResetPassword } from "../../api";
import { selectHasUser } from "../../store/modules/user/user.selector";

import styles from "./ResetPassword.module.css";

export const ResetPassword = () => {
    const hasUser = useSelector(selectHasUser)
    const [password, setPassword] = useState("")
    const [code, setCode] = useState("")
    const navigate = useNavigate()
    const { state } = useLocation()

    const onChangePassword = e => {
        setPassword(e.target.value)
    }

    const onChangeCode = useCallback(e => {
        setCode(e.target.value)
    },[])

    const onClick = useCallback(async e => {
         e.preventDefault()
        try {
            await postResetPassword({ password, token:code })
            navigate("/login")
        } catch (e) {
            return null
        }
    },[password, code])

    if(hasUser || !state?.isCheck) {
        return <Navigate to="/" replace />
    }

    return (
        <main>
            <h1>Восстановление пароля</h1>
            <form onSubmit={onClick}>
            <div className={styles.container}>
                <PasswordInput
                    onChange={onChangePassword}
                    value={password}
                    name={"password"}
                    placeholder="Введите новый пароль"
                    extraClass="mb-6"
                />
                <Input
                    onChange={onChangeCode}
                    value={code}
                    name={"code"}
                    placeholder="Введите код из письма"
                    extraClass="mb-6"
                />
                <Button
                    htmlType="submit"
                    type="primary"
                    size="medium"
                >
                    Сохранить
                </Button>
                <div className={"mt-4"}>
                    <span>Вспомнили пароль?</span>
                    <Link to='/login'>Войти</Link>
                </div>
            </div>
            </form>
        </main>
    )
}
