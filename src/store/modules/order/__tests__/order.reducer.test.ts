import {createOrder, reducer} from "../order.reducer";

describe('order reducer', () => {
  const initialState = {
    numberOrder: null,
  };

  it('should handle initial state', () => {
    expect(reducer(undefined, {type: 'unknown'})).toEqual(initialState);
  });

  it('should handle createOrder.fulfilled', () => {
    const payload = { number: 123 };
    const action = createOrder.fulfilled(payload, '', ['123']);
    const state = reducer(initialState, action);

    expect(state).toEqual({
      numberOrder: 123,
    });
  });

})
