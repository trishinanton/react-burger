import { Button, Input, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";

import { postResetPassword } from "../../api";
import { selectHasUser } from "../../store/modules/user/user.selector";

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

    const onClick = useCallback(async () => {
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
            <div style={{ display: "flex", flexDirection: "column" }}>
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
                    htmlType="button"
                    type="primary"
                    size="medium"
                    onClick={onClick}
                >
                    Сохранить
                </Button>
                <div>
                    <span>Вспомнили пароль?</span>
                    <Link to='/login'>Войти</Link>
                </div>
            </div>
        </main>
    )
}
