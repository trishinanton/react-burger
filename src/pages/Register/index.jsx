import { Button, EmailInput, Input, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { fetchRegister } from "../../store/modules/user/user.reducer";

export const Register = () => {
    const dispatch = useDispatch()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onChangeName = useCallback(e => {
        setName(e.target.value)
    }, [])
    const onChangeEmail = useCallback(e => {
        setEmail(e.target.value)
    }, [])
    const onChangePassword = useCallback(e => {
        setPassword(e.target.value)
    }, [])

    const onClick = useCallback(() => {
        dispatch(fetchRegister({ name, email, password }))
    },[name,email, password])

return (
    <main>
        <h1>Регистрация</h1>
        <div style={{ display: "flex", flexDirection: "column" }}>
            <Input
                onChange={onChangeName}
                value={name}
                name={"name"}
                placeholder="Имя"
                extraClass="mb-6"
            />
            <EmailInput
                onChange={onChangeEmail}
                value={email}
                name={"email"}
                isIcon={false}
                extraClass="mb-6"
            />
            <PasswordInput
                onChange={onChangePassword}
                value={password}
                name={"password"}
                placeholder="Пароль"
            />
            <Button htmlType="button" type="primary" size="medium" onClick={onClick}>
                Зарегистрироваться
            </Button>
            <div>
                <span>Уже зарегистрированы?</span>
                <Link to='/login'>Войти</Link>
            </div>
        </div>
    </main>
)
}
