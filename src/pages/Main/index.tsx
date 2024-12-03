import React, { FC } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import { BurgerConstructor } from '../../components/BurgerConstructor'
import { BurgerIngredients } from '../../components/BurgerIngredients'

export const Main: FC = () => {
  return (
    <main>
      <h1 className="h1">Соберите бургер</h1>
      <DndProvider backend={HTML5Backend}>
        <div className="flex-row-sb-fs">
          <BurgerIngredients />
          <BurgerConstructor />
        </div>
      </DndProvider>
    </main>
  )
}
