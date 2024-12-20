import type { Middleware } from '@reduxjs/toolkit';
import {
  IWsActionsCreator,
  WS_CONNECTION_START,
  WS_SEND_MESSAGE,
  WsActionsType
} from "../modules/ws/ws.reducer";

export const socketMiddleware = (wsActionsCreator: IWsActionsCreator):Middleware => {
  return ((store ) => {
    let socket: WebSocket | null = null;

    return next => (action: WsActionsType) => {
      const {wsConnectionSuccess,wsConnectionError,wsConnectionClosed, wsGetMessage} =wsActionsCreator
      const { dispatch } = store;
      const { type, payload } = action;

      if (type === WS_CONNECTION_START) {
        // объект класса WebSocket
        socket = new WebSocket(payload as string);
      }
      if (socket) {

        // функция, которая вызывается при открытии сокета
        socket.onopen = () => {
          dispatch(wsConnectionSuccess());
        };

        // функция, которая вызывается при ошибке соединения
        socket.onerror = event => {
          dispatch(wsConnectionError(event));
        };

        // функция, которая вызывается при получения события от сервера
        socket.onmessage = event => {
          const { data } = event;
          dispatch(wsGetMessage(JSON.parse(data)));
        };
        // функция, которая вызывается при закрытии соединения
        socket.onclose = () => {
          dispatch(wsConnectionClosed());
        };

        if (type === WS_SEND_MESSAGE) {
          const message = payload;
          // функция для отправки сообщения на сервер
          socket.send(JSON.stringify(message));
        }
      }

      next(action);
    };
  }) as Middleware;
};
