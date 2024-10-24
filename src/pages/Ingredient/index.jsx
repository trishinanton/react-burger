import { useParams } from "react-router-dom";

export const Ingredient = () => {
    const params = useParams()

    return (
        <main>
            {params.ingredientId}
        </main>
    )
}
