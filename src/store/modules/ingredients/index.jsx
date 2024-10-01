import { useEffect, useState } from "react";

import { getIngredients } from "../../../api";

// Пока сделал хуком, в след спринте сделаю через стэйт менеджер
export const useIngredientsData = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        getIngredients()
            .then(data => setData(data))
            .catch(() => null)
    },[])

    return { data }
}
