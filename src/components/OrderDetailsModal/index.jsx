import PropTypes from 'prop-types'

import { Modal } from '../Modal'
import { OrderDetailsContent } from '../OrderDetailsContent'

export const OrderDetailsModal = ({ onClose }) => {
  return (
    <Modal isOpen onClose={onClose}>
      <OrderDetailsContent />
    </Modal>
  )
}

OrderDetailsModal.propTypes = {
  onClose: PropTypes.func.isRequired,
}
