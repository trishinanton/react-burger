import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";

const initialState = {
    entities: {},
    ids: [],
    countIngredients: {},
    currentBun: null
}

export const constructorAdapter = createEntityAdapter({
    selectId: ingredient => ingredient._id
});

const { setAll, addOne, removeOne } = constructorAdapter;

const constructorSlice = createSlice({
    name: 'constructorIngredients',
    initialState,
    reducers: {
        addIngredient: (state, {payload}) => {
            const { type, _id } = payload

            if(type === 'bun') {
                if(state.currentBun?._id) {
                    removeOne(state, state.currentBun._id)
                    state.countIngredients[state.currentBun._id] = 0
                }
                state.countIngredients[_id] = 1
                state.currentBun = payload
            } else {
                addOne(state, payload)
                state.countIngredients[_id] = (state.countIngredients[_id] || 0) + 1
            }
        },
        removeIngredient: (state, {payload: id}) => {
            state.countIngredients[id] = state.countIngredients[id] - 1

            if(state.countIngredients[id] === 0) {
                removeOne(state, id)
            }
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
