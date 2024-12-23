import {fetchIngredients, reducer} from "../ingredients.reducer";

describe('ingredients reducer', () => {
  const initialState = {
    ingredients: [],
    isLoading: false,
    isError: false,
  };

  it('should handle initial state', () => {
    expect(reducer(undefined, {type: 'unknown'})).toEqual(initialState);
  });

  it('should handle fetchIngredients.pending', () => {
    const action = fetchIngredients.pending('', undefined);
    const state = reducer(initialState, action);

    expect(state).toEqual({
      ingredients: [],
      isLoading: true,
      isError: false,
    });
  });

  it('should handle fetchIngredients.fulfilled', () => {
    const payload = [{   _id: 'string',
      name: 'string',
      type: 'string',
      proteins: 1,
      fat: 1,
      carbohydrates: 1,
      calories: 1,
      price: 1,
      image: 'string',
      image_mobile: 'string',
      image_large: 'string',
      uuid: 'string' }];
    const action = fetchIngredients.fulfilled(payload,'', undefined);
    const state = reducer(initialState, action);

    expect(state).toEqual({
      ingredients: payload,
      isLoading: false,
      isError: false,
    });
  });
})
