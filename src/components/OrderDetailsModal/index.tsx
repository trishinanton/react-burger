import { FC, MouseEvent } from 'react'

import { Modal } from '../Modal'
import { OrderDetailsContent } from '../OrderDetailsContent'

interface Props {
  onClose: (event: MouseEvent<HTMLDivElement> | KeyboardEvent) => void
}

export const OrderDetailsModal: FC<Props> = ({ onClose }) => {
  return (
    <Modal isOpen onClose={onClose}>
      <OrderDetailsContent />
    </Modal>
  )
}
