import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

import { Footer } from "./Footer";
import { Ingredient } from "./Ingredient";

import styles from "./BurgerConstructor.module.css"

export const BurgerConstructor = ({ data }) => {
    return (
        <div className={styles.container}>
            <Ingredient ingredientItem={data[0]} isLocked type="top" />
                <div className={styles.container_constructor}>
                    {data.filter((_,i) => i !== 0).map(({ _id, ...ingredientItem }) =>
                    <div key={_id} className="flex-row-fs">
                        <DragIcon className="mr-3" type="primary" />
                        <Ingredient ingredientItem={ingredientItem}/>
                    </div>
                        )}
                </div>
            <Ingredient ingredientItem={data[0]} isLocked type="bottom"/>
            <Footer />
        </div>
    )
}

BurgerConstructor.propTypes = {
    data: PropTypes.array.isRequired
}
