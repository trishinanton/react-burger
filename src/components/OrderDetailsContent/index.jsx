import { CheckMarkIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import cn from "classnames";

import styles from "./OrderDetailsContent.module.css";

export const OrderDetailsContent = () => {
    return <div className={styles.content}>
        <span className="text text_type_digits-large">034536</span>
        <span className="text text_type_main-medium mt-8">идентификатор заказа</span>
        <CheckMarkIcon className="mt-15" type="primary" />
        <span className="text text_type_main-small mt-15">Ваш заказ начали готовить</span>
        <span className={cn("text text_type_main-small mt-2", styles.subtitle)}>Дождитесь готовности на орбитальной станции</span>
    </div>
}
