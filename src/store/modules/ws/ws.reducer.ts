import {createAction, createReducer} from "@reduxjs/toolkit";
import {IOrder} from "../../../utils/types";

export const WS_CONNECTION_START: 'WS_CONNECTION_START' = 'WS_CONNECTION_START';
export const WS_CONNECTION_SUCCESS: 'WS_CONNECTION_SUCCESS' = 'WS_CONNECTION_SUCCESS';
export const WS_CONNECTION_ERROR: 'WS_CONNECTION_ERROR' = 'WS_CONNECTION_ERROR';
export const WS_CONNECTION_CLOSED: 'WS_CONNECTION_CLOSED' = 'WS_CONNECTION_CLOSED';
export const WS_GET_MESSAGE: 'WS_GET_MESSAGE' = 'WS_GET_MESSAGE';
export const WS_SEND_MESSAGE: 'WS_SEND_MESSAGE' = 'WS_SEND_MESSAGE';

interface IWSState {
  wsConnected: boolean;
  orders: IOrder[];
  error?: Event;
  total: number;
  totalToday: number
}

interface IDataMessage {
  orders:IOrder[];
  total: number;
  totalToday: number
}

const initialState: IWSState = {
  wsConnected: false,
  total: 0,
  totalToday: 0,
  orders: []
};

export const wsConnectionStart = createAction<string>(WS_CONNECTION_START)
export const wsConnectionSuccess = createAction(WS_CONNECTION_SUCCESS)
export const wsConnectionError = createAction<Event>(WS_CONNECTION_ERROR)
export const wsConnectionClosed = createAction(WS_CONNECTION_CLOSED)
export const wsGetMessage = createAction<IDataMessage>(WS_GET_MESSAGE)
export const wsSendMessage = createAction(WS_SEND_MESSAGE)

export const reducer = createReducer(initialState, ({ addCase }) => {
  addCase(wsConnectionSuccess, state => {
    state.wsConnected = true
    state.error = undefined
  });
  addCase(wsConnectionError, (state, {payload}) => {
    state.wsConnected = false
    state.error = payload
  });
  addCase(wsConnectionClosed, state => {
    state.wsConnected = false
    state.error = undefined
  });
  addCase(wsGetMessage, (state, {payload}) => {
    const {orders, total, totalToday} = payload
    state.error = undefined
    state.orders = orders
    state.total = total
    state.totalToday=totalToday
  });
});

export type WsActionsType =
  ReturnType<typeof wsConnectionStart>
  | ReturnType<typeof wsConnectionSuccess>
  | ReturnType<typeof wsConnectionError>
  | ReturnType<typeof wsConnectionClosed>
  | ReturnType<typeof wsGetMessage>
  | ReturnType<typeof wsSendMessage>

export const wsActionsCreator = {wsConnectionSuccess,wsConnectionError,wsConnectionClosed, wsGetMessage}

export interface IWsActionsCreator {
  wsConnectionSuccess: typeof wsConnectionSuccess
  wsConnectionError: typeof wsConnectionError
  wsConnectionClosed: typeof wsConnectionClosed
  wsGetMessage: typeof wsGetMessage
}
