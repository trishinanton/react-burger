import {
  reducer, wsConnectionClosed,
  wsConnectionError,
  wsConnectionSuccess, wsGetMessage
} from "../ws.reducer";
import {IOrder} from "../../../../utils/types";

describe('WebSocket reducer', () => {
  const initialState = {
    wsConnected: false,
    total: 0,
    totalToday: 0,
    orders: []
  };

  it('should handle initial state', () => {
    expect(reducer(undefined, {type: 'unknown'})).toEqual(initialState);
  });

  it('should handle wsConnectionSuccess', () => {
    const action = wsConnectionSuccess();
    const state = reducer(initialState, action);

    expect(state).toEqual({
      ...initialState,
      wsConnected: true,
      error: undefined,
    });
  });
  it('should handle wsConnectionError', () => {
    const mockError = new Event('error');
    const action = wsConnectionError(mockError);
    const state = reducer(initialState, action);

    expect(state).toEqual({
      ...initialState,
      wsConnected: false,
      error: mockError,
    });
  });
  it('should handle wsConnectionClosed', () => {
    const connectedState = {
      wsConnected: true,
      total: 0,
      totalToday: 0,
      orders: [],
      error: undefined,
    };

    const action = wsConnectionClosed();
    const state = reducer(connectedState, action);

    expect(state).toEqual({
      ...initialState,
      wsConnected: false,
      error: undefined,
    });
  });

  it('should handle wsGetMessage', () => {
    const mockOrders: IOrder[] = [
      {ingredients: ['123'],_id:'123',name:'test',status: '123',number: 123, createdAt:'123',updatedAt: '1234'   },
    ];

    const action = wsGetMessage({
      orders: mockOrders,
      total: 300,
      totalToday: 150
    });

    const state = reducer(initialState, action);

    expect(state).toEqual({
      ...initialState,
      orders: mockOrders,
      total: 300,
      totalToday: 150,
      error: undefined,
    });
  });

})
