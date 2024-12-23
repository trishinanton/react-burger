import { createSelector } from '@reduxjs/toolkit'
import { constructorAdapter } from './constructor.reducer'
import {RootState} from "../../../index";

const selectConstructor = (store:RootState) => store.constructorIngredients

export const {
  selectAll: selectConstructorList,
  selectIds: selectConstructorIds,
} = constructorAdapter.getSelectors(selectConstructor)

export const selectCurrentBun = createSelector(
  [selectConstructor],
  store => store.currentBun,
)

export const selectCountIngredient = createSelector(
  [selectConstructor, (_, id) => id],
  (store, id) =>
    store.countIngredients[id] ? store.countIngredients[id].length : null,
)

export const selectAllCount = createSelector(
  [selectConstructor],
  store => store.countIngredients,
)
