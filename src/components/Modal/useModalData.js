import { useRef } from "react";
import { useCallback, useEffect } from "react";

export const useModalData = (isOpen, onClose) => {
    const ref = useRef()

    const callbackEscape = useCallback((event) => {
        if(event.key === "Escape") {
            onClose()
        }
    },[onClose])

    const stopPropagationCallback = useCallback(event => {
        event.stopPropagation()
    },[])

    useEffect(() => {
        if(isOpen) {
            document.body.addEventListener("keyup", callbackEscape)
            document.body.addEventListener("mousedown", onClose)

            ref.current?.addEventListener("mousedown",stopPropagationCallback)
        }

        return () => {
            if(isOpen) {
                document.body.removeEventListener("keyup", callbackEscape)
                document.body.removeEventListener("mousedown", onClose)
                ref.current?.removeEventListener("mousedown",stopPropagationCallback)
            }
        }
    },[isOpen, callbackEscape])

    return { ref }
}
