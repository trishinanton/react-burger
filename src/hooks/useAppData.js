import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchIngredients } from "../store/modules/ingredients/ingredients.reducer";

export const useAppData = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchIngredients())
    },[])
}
