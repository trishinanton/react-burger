import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {postOrder} from "../../../api";

const initialState = {
    numberOrder: null
}

export const createOrder = createAsyncThunk(
    'order/createOrder',
    (ids) => postOrder(ids)
)

const orderSlice = createSlice({
    name:'order',
    initialState,
    reducers: {},
    extraReducers: ({ addCase }) => {
        addCase(createOrder.fulfilled, (state, {payload}) => {
            state.numberOrder = payload.number
        })
    }
})

export const {reducer} = orderSlice