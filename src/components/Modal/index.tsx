import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import cn from 'classnames'
import { FC, MouseEvent, PropsWithChildren } from 'react'
import { createPortal } from 'react-dom'

import { ModalOverlay } from '../ModalOverlay'
import { useModalData } from './useModalData'

import styles from './Modal.module.css'

interface Props {
  isOpen: boolean
  onClose: (e: MouseEvent<HTMLDivElement> | KeyboardEvent) => void
}

const modalRoot = document.getElementById('react-modals')

export const Modal: FC<Props & PropsWithChildren> = ({
  isOpen,
  onClose,
  children,
}) => {
  useModalData(isOpen, onClose)

  return createPortal(
    <>
      <div className={cn(styles.container, 'pl-10 pr-10 pb-15 pt-10')}>
        <div data-e2e-id="close-modal">
          <CloseIcon
            onClick={onClose as () => void}
            type="primary"
            className={styles.close}
          />
        </div>
        {children}
      </div>
      <ModalOverlay onClose={onClose} />
    </>,
    modalRoot as Element | DocumentFragment,
  )
}
