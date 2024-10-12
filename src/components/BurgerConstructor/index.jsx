import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useCallback, useState } from "react";
import { useDrop } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import { v1 as uuid } from "uuid";

import { addIngredient, setAllIngredients } from "../../store/modules/constructor/constructor.reducer";
import { selectConstructorList, selectCurrentBun } from "../../store/modules/constructor/constructor.selector";
import { Footer } from "./Footer";
import { Ingredient } from "./Ingredient";

import styles from "./BurgerConstructor.module.css"

export const BurgerConstructor = () => {
    const data = useSelector(selectConstructorList)
    const dispatch = useDispatch()

    const [hoverItemUUId, setHoverItemUUId] = useState("")

    const onDropHandler = useCallback(item => {
        dispatch(addIngredient(item ))
    },[])

    const [, dropTarget] = useDrop({
        accept: "ingredient",
        drop({ item }) {
            onDropHandler( { uuid:uuid(), ...item } );
        },
    });

    const onDropHandlerMain = useCallback(item => {
        if(hoverItemUUId) {
            const filteredItems = data.filter(el => el.uuid !== item.uuid)

            const findItem = filteredItems.find(el => el.uuid === hoverItemUUId)
            const idx = filteredItems.indexOf(findItem)

            filteredItems.splice(idx, 0, item)

            dispatch(setAllIngredients(filteredItems))
        }

    },[hoverItemUUId, data])

    const currentItemBun = useSelector(selectCurrentBun)

    return (
        <div ref={dropTarget} className={styles.container}>
            {currentItemBun ? (
                <>
                    <Ingredient item={currentItemBun} isLocked type="top" />
                        <div className={styles.container_constructor}>
                            {data.map(item =>
                                <div key={item.uuid} className="flex-row-fs">
                                    <DragIcon className="mr-3" type="primary" />
                                    <Ingredient setHoverItemUUId={setHoverItemUUId} onDropHandler={onDropHandlerMain} item={item}/>
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
