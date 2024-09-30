import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import cn from "classnames";

import { data } from "../../store";
import { OrderDetailsModal } from "../OrderDetailsModal";
import { Price } from "../Price";
import { Ingredient } from "./Ingredient";
import { useBurgerConstructorData } from "./useBurgerConstructorData";

import styles from "./BurgerConstructor.module.css"

export const BurgerConstructor = () => {

    const {
        isOpenOrderModal,
        onClickOrder,
        onCloseOrderModal
    } = useBurgerConstructorData()

    return (
        <div className={styles.container}>
        <div className={styles.container_constructor}>
            {data.map(({
                           name,
                           price,
                           image,
                           _id,
                           calories,
                           proteins,
                           fat,
                           carbohydrates
            }) => <Ingredient
                key={_id}
                name={name}
                price={price}
                image={image}
                calories={calories}
                proteins={proteins}
                fat={fat}
                carbohydrates={carbohydrates}
            />)}
        </div>
            <div className={cn("flex-row-fe", styles.count_wrapper)}>
                <Price
                    classNameCurrency={styles.icon}
                    classNameCount="text text_type_digits-medium"
                    price={610}
                />
                <Button
                    htmlType="button"
                    type="primary" size="large"
                    extraClass={styles.button}
                    onClick={onClickOrder}
                >
                    Оформить заказ
                </Button>
                {isOpenOrderModal ? <OrderDetailsModal onClose={onCloseOrderModal} /> : null}
            </div>
        </div>
    )
}
