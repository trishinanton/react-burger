import PropTypes from 'prop-types'

import styles from './ModalOverlay.module.css'

export const ModalOverlay = ({ onClose }) => {
  return <div onClick={onClose} className={styles.container} />
}

ModalOverlay.propTypes = {
  onClose: PropTypes.func.isRequired,
}
