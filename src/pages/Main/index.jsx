import React from 'react'
import { useEffect } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { useDispatch } from 'react-redux'

import { BurgerConstructor } from '../../components/BurgerConstructor'
import { BurgerIngredients } from '../../components/BurgerIngredients'
import { fetchIngredients } from '../../store/modules/ingredients/ingredients.reducer'

export const Main = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchIngredients())
  }, [])

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
