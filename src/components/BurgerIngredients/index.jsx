import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import cn from "classnames";
import PropTypes from "prop-types";
import { useState } from "react";

import { Ingredients } from "./Ingredients";

import styles from "./BurgerIngredients.module.css"

export const BurgerIngredients = ({ data }) => {
    const [current, setCurrent] = useState("buns")

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
            <Ingredients data={data} />
        </div>
    )
}

BurgerIngredients.propTypes = {
    data: PropTypes.array.isRequired
}
