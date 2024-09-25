import { Button, ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import cn from "classnames";
import { Fragment } from "react";

import { data } from "../../store";
import { Price } from "../Price";

import styles from "./BurgerConstructor.module.css"

export const BurgerConstructor = () => {
    return (
        <div className={styles.container}>
        <div className={styles.container_constructor}>
            {data.map(({ name, price, image, _id }) => (
                <Fragment key={_id}>
                <ConstructorElement
                    type={"top"}
                    isLocked={true}
                    text={name}
                    price={price}
                    thumbnail={image}
                />
                </Fragment>
            ))}
        </div>
            <div className={cn("flex-row-fe", styles.count_wrapper)}>
                <Price
                    classNameCurrency={styles.icon}
                    classNameCount="text text_type_digits-medium"
                    price={610}
                />
                <Button htmlType="button" type="primary" size="large" extraClass={styles.button}>
                    Оформить заказ
                </Button>
            </div>
        </div>
    )
}
