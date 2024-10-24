import { Button, EmailInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";
import { Link } from "react-router-dom";

export const ForgotPassword = () => {
    const [value, setValue] = useState("bob@example.com")
    const onChange = e => {
        setValue(e.target.value)
    }

    return (
        <main>
            <h1>Восстановление пароля</h1>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <EmailInput
                    onChange={onChange}
                    value={value}
                    name={"email"}
                    placeholder="Укажите e-mail"
                    isIcon={false}
                    extraClass="mb-6"
                />
                <Button htmlType="button" type="primary" size="medium">
                    Восстановить
                </Button>
                <div>
                    <span>Вспомнили пароль?</span>
                    <Link to='/login'>Войти</Link>
                </div>
            </div>
        </main>
    )
}
