import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

import { IngredientItem } from "../../IngredientItem";

import styles from "./Ingredients.module.css";

export const Ingredients = ({ data, setCurrentTab }) => {
    const buns = data.filter(({ type }) => type === "bun")
    const sauces = data.filter(({ type }) => type === "sauce")
    const main = data.filter(({ type }) => type === "main")

    const refRoot = useRef()

    const [refBuns, inViewBuns] = useInView({
        threshold: 1,
        root: refRoot.current
    });

    const [refSauces, inViewSauces] = useInView({
        threshold: 1,
        root: refRoot.current
    });

    const [refMain, inViewMain] = useInView({
        threshold: 1,
        root: refRoot.current
    });

    useEffect(() => {
        if(inViewBuns) {
            setCurrentTab("buns")
        } else if(inViewSauces) {
            setCurrentTab("sauces")
        } else {
            setCurrentTab("fillings")
        }
    },[inViewBuns, inViewSauces, inViewMain])

  return (
    <div ref={refRoot} className={styles.container}>
      <span ref={refBuns} className={"text text_type_main-medium mt-10"}>Булки</span>
      <div className={"flex-row-fs-w"}>
        {buns.map(item => {
            return (
                <IngredientItem
                    key={item._id}
                    item={item}
                    wrapperClassName={styles.wrapper_ingredient}
                />
            )
        })}
      </div>

      <span ref={refSauces} className={"text text_type_main-medium mt-10"}>Соусы</span>
      <div className={"flex-row-fs-w"}>
        {sauces.map(item => (
          <IngredientItem
            key={item._id}
            item={item}
            wrapperClassName={styles.wrapper_ingredient}
          />
        ))}
      </div>

      <span ref={refMain} className={"text text_type_main-medium mt-10"}>Начинка</span>
      <div className={"flex-row-fs-w"}>
        {main.map(item => (
          <IngredientItem
            key={item._id}
            item={item}
            wrapperClassName={styles.wrapper_ingredient}
          />
        ))}
      </div>
    </div>
  )
}

Ingredients.propTypes = {
    data: PropTypes.array.isRequired,
    setCurrentTab:  PropTypes.func.isRequired
}
