import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import cn from 'classnames'
import PropTypes from 'prop-types'
import { createPortal } from 'react-dom'

import { ModalOverlay } from '../ModalOverlay'
import { useModalData } from './useModalData'

import styles from './Modal.module.css'

const modalRoot = document.getElementById('react-modals')

export const Modal = ({ isOpen, onClose, children }) => {
  useModalData(isOpen, onClose)

  return createPortal(
    <>
      <div className={cn(styles.container, 'pl-10 pr-10 pb-15 pt-10')}>
        <CloseIcon onClick={onClose} type="primary" className={styles.close} />
        {children}
      </div>
      <ModalOverlay onClose={onClose} />
    </>,
    modalRoot,
  )
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
}
