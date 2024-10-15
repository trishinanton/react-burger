import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";

const initialState = {
    entities: {},
    ids: [],
    countIngredients: {},
    currentBun: null
}

export const constructorAdapter = createEntityAdapter({
    selectId: ingredient => ingredient.uuid
});

const { setAll, addOne, removeOne } = constructorAdapter;

const constructorSlice = createSlice({
    name: 'constructorIngredients',
    initialState,
    reducers: {
        addIngredient: (state, {payload}) => {
            const { type, _id, uuid } = payload

            if(type === 'bun') {
                if(state.currentBun?._id) {
                    removeOne(state, state.currentBun.uuid)
                    state.countIngredients[state.currentBun._id] = []
                }
                state.countIngredients[_id] = [uuid]
                state.currentBun = payload
            } else {
                addOne(state, payload)
                state.countIngredients[_id] = (state.countIngredients[_id] || []).concat(uuid)
            }
        },
        removeIngredient: (state, {payload: item}) => {
            const {_id, uuid} = item
            state.countIngredients[_id] = state.countIngredients[_id]?.filter(id => id !== uuid)
            removeOne(state, uuid)
        },
        setAllIngredients: (state, {payload}) => {
            setAll(state, payload)
        }
    }
})

export const { reducer, actions: {
    addIngredient,
    removeIngredient,
    setAllIngredients
}} = constructorSlice
