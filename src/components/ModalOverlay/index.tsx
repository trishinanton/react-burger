import { FC } from 'react'

import styles from './ModalOverlay.module.css'

interface Props {
  onClose: (event: Event) => void
}
export const ModalOverlay: FC<Props> = ({ onClose }) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  return <div onClick={onClose} className={styles.container} />
}
