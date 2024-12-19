import { createSelector } from '@reduxjs/toolkit'
import {RootState} from "../../../index";

const selectIngredients = (store:RootState) => store.ingredients

export const selectIngredientsList = createSelector(
  [selectIngredients],
  store => store.ingredients,
)
