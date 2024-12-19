import { combineReducers } from '@reduxjs/toolkit'
import { reducer as ingredients } from './modules/ingredients/ingredients.reducer'
import { reducer as constructorIngredients } from './modules/constructor/constructor.reducer'
import { reducer as order } from './modules/order/order.reducer'
import { reducer as user } from './modules/user/user.reducer'
import { reducer as ws } from './modules/ws/ws.reducer'

const reducers = {
  ingredients,
  constructorIngredients,
  order,
  user,
  ws
}

export const createRootReducer = () => combineReducers(reducers)

export type AppReducer = typeof reducers;
