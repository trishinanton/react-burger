import { Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import cn from "classnames";
import PropTypes from "prop-types";

import { Price } from "../Price";

import styles from "./IngredientItem.module.css";

export const IngredientItem = ({ price,name,image, count, wrapperClassName }) => {
    return (
        <div className={cn("flex-col-fs-c", wrapperClassName, styles.container)}>
            <img src={image} alt={"logo"} />
            <Price
                classNameCurrency={styles.icon}
                classNameCount="text text_type_digits-default"
                price={price}
            />
            <span className="text text_type_main-default mt-2">{name}</span>
            <Counter className={styles.counter} count={count} size="small" />
        </div>
    )
}

IngredientItem.propTypes = {
    price: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    wrapperClassName: PropTypes.string,
    count: PropTypes.number
}

IngredientItem.defaultProps = {
    count: 0,
    wrapperClassName:""
}
