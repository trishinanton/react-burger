import { useCallback, useEffect } from "react";

export const useModalData = (isOpen, onClose) => {
    const callbackEscape = useCallback((event) => {
        if(event.key === "Escape") {
            onClose()
        }
    },[onClose])

    useEffect(() => {
        if(isOpen) {
            document.body.addEventListener("keyup", callbackEscape)
        }

        return () => {
            if(isOpen) {
                document.body.removeEventListener("keyup", callbackEscape)
            }
        }
    },[isOpen, callbackEscape])
}
