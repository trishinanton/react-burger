import { configureStore } from '@reduxjs/toolkit'
import { createRootReducer } from './rootReducer'
import {socketMiddleware} from "./middleware";

const wsUrl = 'wss://norma.nomoreparties.space/orders/all'

export const createStore = () => {
  const rootReducer = createRootReducer()

  const store = configureStore({
    reducer: rootReducer,
    preloadedState: undefined,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(socketMiddleware(wsUrl)),
  })

  return store
}
