import {createEntityAdapter, createSlice, type EntityAdapter} from '@reduxjs/toolkit'
import {IIngredientItem} from "../../../utils/types";

interface IInitialState {
  entities: Record<string, IIngredientItem>;
  ids: Array<string>;
  countIngredients: Record<string, string[]>
  currentBun: IIngredientItem | null
}
const initialState: IInitialState = {
  entities: {},
  ids: [],
  countIngredients: {},
  currentBun: null,
}

export const constructorAdapter:EntityAdapter<IIngredientItem, string> = createEntityAdapter({
  selectId: ingredient => ingredient.uuid,
})

const { setAll, addOne, removeOne } = constructorAdapter

const constructorSlice = createSlice({
  name: 'constructorIngredients',
  initialState,
  reducers: {
    addIngredient: (state, { payload }) => {
      const { type, _id, uuid } = payload

      if (type === 'bun') {
        if (state.currentBun?._id) {
          removeOne(state, state.currentBun.uuid)
          state.countIngredients[state.currentBun._id] = []
        }
        state.countIngredients[_id] = [uuid]
        state.currentBun = payload
      } else {
        addOne(state, payload)
        state.countIngredients[_id] = (
          state.countIngredients[_id] || []
        ).concat(uuid)
      }
    },
    removeIngredient: (state, { payload: item }) => {
      const { _id, uuid } = item
      state.countIngredients[_id] = state.countIngredients[_id]?.filter(
        id => id !== uuid,
      )
      removeOne(state, uuid)
    },
    setAllIngredients: (state, { payload }) => {
      setAll(state, payload)
    },
  },
})

export const {
  reducer,
  actions: { addIngredient, removeIngredient, setAllIngredients },
} = constructorSlice
