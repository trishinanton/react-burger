import {RootState} from "../../../index";
import {createSelector} from "@reduxjs/toolkit";

const selectWS = (store:RootState) => store.ws

export const selectTotalOrders = createSelector(
  [selectWS],
  store => store.total
);

export const selectTotalTodayOrders = createSelector(
  [selectWS],
  store => store.totalToday
);

export const selectOrders = createSelector(
  [selectWS],
  store => store.orders
);

export const selectWsConnected = createSelector(
  [selectWS],
  store => store.wsConnected
);
