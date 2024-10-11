import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { AppHeader } from "./components/AppHeader";
import { BurgerConstructor } from "./components/BurgerConstructor";
import { BurgerIngredients } from "./components/BurgerIngredients";
import { useAppData } from "./hooks/useAppData";

function App() {
  useAppData()

  return (
    <div className="container">
      <AppHeader />
      <main>
        <h1 className="h1">Соберите бургер</h1>
        <DndProvider backend={HTML5Backend}>
          <div className="flex-row-sb-fs">
            <BurgerIngredients />
            <BurgerConstructor />
          </div>
        </DndProvider>
      </main>
    </div>
  );
}

export default App;
