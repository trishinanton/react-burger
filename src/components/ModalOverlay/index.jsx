import cn from "classnames";
import PropTypes from "prop-types";
import { createPortal } from "react-dom"

import styles from "./ModalOverlay.module.css"

const modalRoot = document.getElementById("react-modals");

export const ModalOverlay = ({ children, isOpen }) => {
    if(!isOpen) {
        return null
    }
    return createPortal(
        <div className={styles.container}>
            <div className={cn(styles.content, "pt-10")}>{children}</div>
        </div>, modalRoot)
}

ModalOverlay.propTypes = {
    children: PropTypes.node.isRequired,
    isOpen: PropTypes.bool.isRequired
}
