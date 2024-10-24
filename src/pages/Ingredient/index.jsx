import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { IngredientDetailsContent } from "../../components/IngredientDetailsContent";
import { fetchIngredients } from "../../store/modules/ingredients/ingredients.reducer";
import { selectIngredientsList } from "../../store/modules/ingredients/ingredients.selector";

export const Ingredient = () => {
    const { ingredientId } = useParams()

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchIngredients())
    },[])

    const ingredients = useSelector(selectIngredientsList)

    const ingredientItem = ingredients.find(({ _id }) => _id === ingredientId)

    if(!ingredientItem) {
        return null
    }

    return (
        <main>
            <IngredientDetailsContent ingredientItem={ingredientItem} />
        </main>
    )
}
