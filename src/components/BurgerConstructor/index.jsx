import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useCallback, useState } from "react";
import { useDrop } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";

import { addIngredient, setAllIngredients } from "../../store/modules/constructor/constructor.reducer";
import { selectConstructorList, selectCurrentBun } from "../../store/modules/constructor/constructor.selector";
import { Footer } from "./Footer";
import { Ingredient } from "./Ingredient";

import styles from "./BurgerConstructor.module.css"

export const BurgerConstructor = () => {
    const data = useSelector(selectConstructorList)
    const dispatch = useDispatch()

    const [hoverItemId, setHoverItemId] = useState("")

    const onDropHandler = useCallback(item => {
        dispatch(addIngredient(item))
    },[])

    const [, dropTarget] = useDrop({
        accept: "ingredient",
        drop({ item }) {
            onDropHandler( item );
        },
    });

    const onDropHandlerMain = useCallback(item => {
        if(hoverItemId) {
            const filteredItems = data.filter(el => el._id !== item._id)

            const findItem = filteredItems.find(el => el._id === hoverItemId)
            const idx = filteredItems.indexOf(findItem)

            filteredItems.splice(idx, 0, item)
            dispatch(setAllIngredients(filteredItems))
        }

    },[hoverItemId, data])

    const currentItemBun = useSelector(selectCurrentBun)

    return (
        <div ref={dropTarget} className={styles.container}>
            {currentItemBun ? (
                <>
                    <Ingredient item={currentItemBun} isLocked type="top" />
                        <div className={styles.container_constructor}>
                            {data.map(item =>
                                <div key={item._id} className="flex-row-fs">
                                    <DragIcon className="mr-3" type="primary" />
                                    <Ingredient setHoverItemId={setHoverItemId} onDropHandler={onDropHandlerMain} item={item}/>
                                </div>
                            )}
                        </div>
                <Ingredient item={currentItemBun} isLocked type="bottom"/>
                <Footer />
                </>
            ) : (
                <div className={styles.emptyWrapper}>
                    <span className="text text_type_main-medium">Перетащите в эту область булку, а потом все остальное</span>
                </div>
                )}
        </div>
    )
}
