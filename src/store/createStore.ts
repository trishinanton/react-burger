import { configureStore } from '@reduxjs/toolkit'
import { createRootReducer } from './rootReducer'

export const createStore = () => {
  const rootReducer = createRootReducer()

  const store = configureStore({
    reducer: rootReducer,
    preloadedState: undefined,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
  })

  return store
}
