import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import cn from "classnames";
import PropTypes from "prop-types";

import styles from "./Price.module.css"

export const Price = ({ classNameCount, classNameCurrency, price }) => (
    <div className={"flex-row-fs"}>
        <p className={cn(classNameCount, styles.price)}>{price}</p>
        <CurrencyIcon className={classNameCurrency} type="primary" />
    </div>
)

Price.propTypes = {
    classNameCount: PropTypes.string.isRequired,
    classNameCurrency: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}
