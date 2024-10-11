import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import cn from "classnames";

import { OrderDetailsModal } from "../../OrderDetailsModal";
import { Price } from "../../Price";
import { useFooterData } from "./useFooterData";

import styles from "./Footer.module.css";

export const Footer = () => {
    const {
        isOpenOrderModal,
        onClickOrder,
        onCloseOrderModal,
        commonPrice
    } = useFooterData()

    return <div className={cn("flex-row-fe", styles.container)}>
        <Price
            classNameCurrency={styles.icon}
            classNameCount="text text_type_digits-medium"
            price={commonPrice}
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
}
