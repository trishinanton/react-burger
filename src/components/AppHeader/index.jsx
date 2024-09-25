import { BurgerIcon, ListIcon, Logo, ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import cn from "classnames";

import styles from "./AppHeader.module.css"

export const AppHeader = () => {
    return <header className={cn("flex-row-sb", styles.container)}>
        <div className={"flex-row-fs"}>
            <div className={cn("flex-row-fs", styles.item)}>
                <BurgerIcon type="primary" />
                <span className={"margin-left-8"}>Конструктор</span>
            </div>
            <div className={cn("flex-row-fs", styles.item)}>
                <ListIcon type="secondary" />
                <span className={"secondary-text margin-left-8"}>Лента заказов</span>
            </div>
        </div>
        <Logo />
        <div className={"flex-row-fs"}>
            <ProfileIcon type="secondary" />
            <span className={"secondary-text margin-left-8"}>Личный кабинет</span>
        </div>
    </header>

}
