import {createSelector} from "@reduxjs/toolkit";

const selectIngredients = store => store.ingredients

export const selectIngredientsList = createSelector(
    [selectIngredients],
    store => store.ingredients
)
