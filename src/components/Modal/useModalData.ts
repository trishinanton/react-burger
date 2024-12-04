import { MouseEvent, useCallback, useEffect } from 'react'

export const useModalData = (
  isOpen: boolean,
  onClose: (event: MouseEvent<HTMLDivElement> | KeyboardEvent) => void,
) => {
  const callbackEscape = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose(event)
      }
    },
    [onClose],
  )

  useEffect(() => {
    if (isOpen) {
      document.body.addEventListener('keyup', callbackEscape)
    }

    return () => {
      if (isOpen) {
        document.body.removeEventListener('keyup', callbackEscape)
      }
    }
  }, [isOpen, callbackEscape])
}
