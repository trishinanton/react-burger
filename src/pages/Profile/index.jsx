import { Link } from "react-router-dom";

export const Profile = () => {
    return (
        <main>
            <div>
                <Link to="/profile">Профиль</Link>
                <Link to="/profile">История заказов</Link>
                <Link to="/profile">Выход</Link>
                <div>В этом разделе вы можете <bt />изменить свои персональные данные</div>
            </div>
        </main>
    )
}
