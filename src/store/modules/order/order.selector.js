import { createSelector } from '@reduxjs/toolkit'

const selectOrder = store => store.order

export const selectNumberOrder = createSelector(
  [selectOrder],
  store => store.numberOrder,
)
