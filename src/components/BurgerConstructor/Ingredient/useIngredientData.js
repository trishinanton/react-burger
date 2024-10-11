import { useMemo } from "react";

export const useIngredientData = (type, name) => {

    const text = useMemo(() => {
        if(type === "top") {
            return name + " (верх)"
        }

        if(type === "bottom") {
            return name + " (низ)"
        }

        return name
    }, [type, name])

    return {
        text
    }
}
