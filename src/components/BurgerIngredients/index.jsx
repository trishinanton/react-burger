import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import cn from "classnames";
import { useState } from "react";
import { useSelector } from "react-redux";

import { selectIngredientsList } from "../../store/modules/ingredients/ingredients.selector";
import { Ingredients } from "./Ingredients";

import styles from "./BurgerIngredients.module.css"

export const BurgerIngredients = () => {
    const [current, setCurrent] = useState("buns")
    const data = useSelector(selectIngredientsList)

    return (
        <div className={cn("flex-col-fs", styles.container)}>
            <div className={"flex-row-fs"}>
                <Tab value="buns" active={current === "buns"} onClick={setCurrent}>
                    Булки
                </Tab>
                <Tab value="sauces" active={current === "sauces"} onClick={setCurrent}>
                    Соусы
                </Tab>
                <Tab value="fillings" active={current === "fillings"} onClick={setCurrent}>
                    Начинки
                </Tab>
            </div>
            <Ingredients data={data} setCurrentTab={setCurrent} />
        </div>
    )
}
