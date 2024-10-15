import { combineReducers } from '@reduxjs/toolkit';
import { reducer as ingredients } from './modules/ingredients/ingredients.reducer';
import { reducer as constructorIngredients } from './modules/constructor/constructor.reducer';
import { reducer as order } from './modules/order/order.reducer';

const reducers = {
    ingredients,
    constructorIngredients,
    order
}

export const createRootReducer = () => combineReducers(reducers)
