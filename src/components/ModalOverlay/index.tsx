import { FC, MouseEvent } from 'react'

import styles from './ModalOverlay.module.css'

interface Props {
  onClose: (event: MouseEvent<HTMLDivElement>) => void
}
export const ModalOverlay: FC<Props> = ({ onClose }) => {
  return <div onClick={onClose} className={styles.container} />
}
