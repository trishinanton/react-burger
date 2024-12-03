import { FC } from 'react'

import { Modal } from '../Modal'
import { OrderDetailsContent } from '../OrderDetailsContent'

interface Props {
  onClose: (event: Event) => void
}

export const OrderDetailsModal: FC<Props> = ({ onClose }) => {
  return (
    <Modal isOpen onClose={onClose}>
      <OrderDetailsContent />
    </Modal>
  )
}
