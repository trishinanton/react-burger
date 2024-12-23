import {addIngredient, reducer, removeIngredient, setAllIngredients} from "../constructor.reducer";
import {IIngredientItem} from "../../../../utils/types";

describe('constructorSlice reducer', () => {
  const initialState = {
    entities: {},
    ids: [],
    countIngredients: {},
    currentBun: null,
  };
  const mockBun: IIngredientItem = {
    _id: '2',
    uuid: 'uuid-2',
    type: 'bun',
    name: 'Sesame Bun',
    price: 200,
    proteins: 1,
    fat: 1,
    carbohydrates: 1,
    calories: 1,
    image: 'string',
    image_mobile: 'string',
    image_large: 'string',
  };

  const mockIngredient: IIngredientItem = {
    _id: '1',
    uuid: 'uuid-1',
    type: 'sauce',
    name: 'Sesame Bun',
    price: 200,
    proteins: 1,
    fat: 1,
    carbohydrates: 1,
    calories: 1,
    image: 'string',
    image_mobile: 'string',
    image_large: 'string',
  }


  it('should handle initial state', () => {
    expect(reducer(undefined, {type: 'unknown'})).toEqual(initialState);
  });

  it('should handle addIngredient for bun', () => {
    const action = addIngredient(mockBun);
    const state = reducer(initialState, action);

    expect(state).toEqual({
      ...initialState,
      countIngredients: { [mockBun._id]: [mockBun.uuid] },
      currentBun: mockBun,
    });
  });
  it('should handle addIngredient for non-bun', () => {
    const action = addIngredient(mockIngredient);
    const state = reducer(initialState, action);

    expect(state).toEqual({
      ...initialState,
      entities: { [mockIngredient.uuid]: mockIngredient },
      ids: [mockIngredient.uuid],
      countIngredients: { [mockIngredient._id]: [mockIngredient.uuid] },
      currentBun: null,
    });
  });
  it('should handle removeIngredient', () => {
    const stateWithIngredient = reducer(initialState, addIngredient(mockIngredient));
    const action = removeIngredient(mockIngredient);
    const state = reducer(stateWithIngredient, action);

    expect(state).toEqual({
      ...initialState,
      entities: {},
      ids: [],
      countIngredients: { [mockIngredient._id]: [] },
      currentBun: null,
    });
  });
  it('should handle setAllIngredients', () => {
    const ingredients = [mockIngredient, mockBun];
    const action = setAllIngredients(ingredients);
    const state = reducer(initialState, action);

    expect(state).toEqual({
      entities: {
        [mockIngredient.uuid]: mockIngredient,
        [mockBun.uuid]: mockBun,
      },
      ids: [mockIngredient.uuid, mockBun.uuid],
      countIngredients: {},
      currentBun: null,
    });
  });
  it('should handle addIngredient when replacing current bun', () => {
    const initialStateWithBun = reducer(initialState, addIngredient(mockBun));

    const newAction = addIngredient(mockBun); // добавляем новый bun
    const state = reducer(initialStateWithBun, newAction);

    expect(state).toEqual({
      ...initialStateWithBun,
      countIngredients: { [mockBun._id]: [mockBun.uuid] },
      currentBun: mockBun,
    });
  });

})
