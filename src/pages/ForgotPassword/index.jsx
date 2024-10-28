import { Button, EmailInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";

import { postForgotPassword } from "../../api";
import { selectHasUser } from "../../store/modules/user/user.selector";

import styles from "./ForgotPassword.module.css";

export const ForgotPassword = () => {
    const hasUser = useSelector(selectHasUser)
    const [email, setEmail] = useState("")
    const navigate = useNavigate()

    const onChange = e => {
        setEmail(e.target.value)
    }

    const onClick = useCallback(async e => {
        e.preventDefault()
        try {
            await postForgotPassword(email)
            navigate("/reset-password", { state: { isCheck: true } })
        } catch (e) {
           return null
        }

    },[email, navigate])

    if(hasUser) {
        return <Navigate to="/" replace />
    }

    return (
        <main>
            <h1>Восстановление пароля</h1>
            <form onSubmit={onClick}>
            <div className={styles.container}>
                <EmailInput
                    onChange={onChange}
                    value={email}
                    name={"email"}
                    placeholder="Укажите e-mail"
                    isIcon={false}
                    extraClass="mb-6"
                />
                <Button
                    htmlType="submit"
                    type="primary"
                    size="medium"
                >
                    Восстановить
                </Button>
                <div className={"mt-4"}>
                    <span className={"mr-4"}>Вспомнили пароль?</span>
                    <Link to='/login'>Войти</Link>
                </div>
            </div>
            </form>
        </main>
    )
}
