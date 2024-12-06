import { createSelector } from '@reduxjs/toolkit'
import {RootState} from "../../../index";

const selectOrder = (store:RootState) => store.order

export const selectNumberOrder = createSelector(
  [selectOrder],
  store => store.numberOrder,
)
