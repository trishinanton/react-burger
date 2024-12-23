import { FC } from 'react'

import { Footer } from './Footer'
import { Ingredient } from './Ingredient'
import { useBurgerConstructorData } from './useBurgerConstructorData'

import styles from './BurgerConstructor.module.css'

export const BurgerConstructor: FC = () => {
  const {
    dropTarget,
    currentItemBun,
    data,
    setHoverItemUUId,
    onDropHandlerMain,
  } = useBurgerConstructorData()

  return (
    <div
      data-e2e-id="constructor-destination"
      ref={dropTarget}
      className={styles.container}>
      {currentItemBun ? (
        <>
          <Ingredient item={currentItemBun} isLocked type="top" />
          <div className={styles.container_constructor}>
            {data.map(item => (
              <Ingredient
                key={item.uuid}
                setHoverItemUUId={setHoverItemUUId}
                onDropHandler={onDropHandlerMain}
                item={item}
              />
            ))}
          </div>
          <Ingredient item={currentItemBun} isLocked type="bottom" />
          <Footer />
        </>
      ) : (
        <div className={styles.emptyWrapper}>
          <span className="text text_type_main-medium">
            Перетащите в эту область булку, а потом все остальное
          </span>
        </div>
      )}
    </div>
  )
}
