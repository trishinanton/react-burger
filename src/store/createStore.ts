import { configureStore } from '@reduxjs/toolkit'
import { createRootReducer } from './rootReducer'
import {socketMiddleware} from "./middleware";

export const createStore = () => {
  const rootReducer = createRootReducer()

  const store = configureStore({
    reducer: rootReducer,
    preloadedState: undefined,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(socketMiddleware()),
  })

  return store
}
