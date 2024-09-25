import React from "react";

import { AppHeader } from "./components/AppHeader";
import { BurgerConstructor } from "./components/BurgerConstructor";
import { BurgerIngredients } from "./components/BurgerIngredients";

import "./App.css";

function App() {
  return (
    <div className="container">
      <AppHeader />
      <h1 className="h1">Соберите бургер</h1>
      <div className="flex-row-sb-fs">
        <BurgerIngredients/>
        <BurgerConstructor />
      </div>
    </div>
  );
}

export default App;
