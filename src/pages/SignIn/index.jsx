import { Button, EmailInput, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useLocation } from "react-router-dom";

import { fetchLogin } from "../../store/modules/user/user.reducer";
import { selectHasUser } from "../../store/modules/user/user.selector";

export const SignIn = () => {
    const { state } = useLocation()
    const hasUser = useSelector(selectHasUser)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const onChangeEmail = useCallback(e => {
        setEmail(e.target.value)
    }, [])
    const onChangePassword = useCallback(e => {
        setPassword(e.target.value)
    }, [])

    const dispatch = useDispatch()

    const onClick = useCallback(() => {
        dispatch(fetchLogin({ email, password }))
    },[email, password])

    if(hasUser) {
        return <Navigate to={state?.pathname ? state.pathname :"/"} replace />
    }

    return (
        <main>
            <h1>Вход</h1>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <EmailInput
                    onChange={onChangeEmail}
                    value={email}
                    name={"email"}
                    placeholder="E-mail"
                    isIcon={false}
                    extraClass="mb-2"
                />
                <PasswordInput
                    onChange={onChangePassword}
                    value={password}
                    name={"password"}
                />
                <Button htmlType="button" type="primary" size="medium" onClick={onClick}>
                    Войти
                </Button>
                <div>
                    <span>Вы - новый пользователь?</span>
                    <Link to='/register'>Зарегистрироваться</Link>
                </div>
                <div>
                    <span>Забыли пароль?</span>
                    <Link to='/forgot-password'>Восстановить пароль</Link>
                </div>
            </div>
        </main>
    )
}
