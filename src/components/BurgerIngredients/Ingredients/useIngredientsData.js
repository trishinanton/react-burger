import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

export const useIngredientsData = ({ data, setCurrentTab }) => {
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

    return {
        refRoot,
        refBuns,
        refSauces,
        refMain,
        buns,
        sauces,
        main
    }
}
