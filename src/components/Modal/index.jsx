import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import cn from "classnames";
import PropTypes from "prop-types";

import { ModalOverlay } from "../ModalOverlay";
import { useModalData } from "./useModalData";

import styles from "./Modal.module.css"

export const Modal = ({ isOpen, onClose, children }) => {
    useModalData(isOpen, onClose)

    return <ModalOverlay isOpen={isOpen}>
        <div className={cn(styles.container, "pl-10 pr-10 pb-15 pt-10") }>
            {children}
            <CloseIcon onClick={onClose} type="primary" className={styles.close} />
        </div>
    </ModalOverlay>
}

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClose: PropTypes.func.isRequired
}
