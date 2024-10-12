import { useState } from "react";
import { useSelector } from "react-redux";

import { selectIngredientsList } from "../../store/modules/ingredients/ingredients.selector";

export const useBurgerIngredientsData = () => {
    const [current, setCurrent] = useState("buns")
    const data = useSelector(selectIngredientsList)

    return {
        current,
        setCurrent,
        data
    }
}
