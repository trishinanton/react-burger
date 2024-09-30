import React from "react";

import { AppHeader } from "./components/AppHeader";
import { BurgerConstructor } from "./components/BurgerConstructor";
import { BurgerIngredients } from "./components/BurgerIngredients";
import { useIngredientsData } from "./store/modules/ingredients";

function App() {
  const { data } = useIngredientsData()

  return (
    <div className="container">
      <AppHeader />
      <main>
        <h1 className="h1">Соберите бургер</h1>
        <div className="flex-row-sb-fs">
          <BurgerIngredients data={data}/>
          <BurgerConstructor data={data} />
        </div>
      </main>
    </div>
  );
}

export default App;
