import { CheckMarkIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import cn from "classnames";
import PropTypes from "prop-types";

import { Modal } from "../Modal";

import styles from "./OrderDetailsModal.module.css";

export const OrderDetailsModal = ({ onClose }) => {
    return <Modal isOpen onClose={onClose}>
        <div className={styles.content}>
            <span className="text text_type_digits-large">034536</span>
            <span className="text text_type_main-medium mt-8">идентификатор заказа</span>
            <CheckMarkIcon className="mt-15" type="primary" />
            <span className="text text_type_main-small mt-15">Ваш заказ начали готовить</span>
            <span className={cn("text text_type_main-small mt-2", styles.subtitle)}>Дождитесь готовности на орбитальной станции</span>
        </div>
    </Modal>
}

OrderDetailsModal.propTypes = {
    onClose: PropTypes.func.isRequired
}
