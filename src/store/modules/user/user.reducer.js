import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getUser, postLogin, postRegister} from "../../../api";

const initialState = {
    email: '',
    name: '',
    hasUser: false
}

export const fetchRegister = createAsyncThunk(
    'user/fetchRegister',
    body => postRegister(body)
);

export const fetchLogin = createAsyncThunk(
    'user/fetchLogin',
    body => postLogin(body)
);

export const fetchUser = createAsyncThunk(
    'user/fetchUser',
    () => getUser()
);

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: ({addCase}) => {
        addCase(fetchRegister.fulfilled, (state, {payload}) => {
            state.email = payload.email
            state.name = payload.name
            state.hasUser = true
        });
        addCase(fetchLogin.fulfilled, (state, {payload}) => {
            state.email = payload.email
            state.name = payload.name
            state.hasUser = true
        });
        addCase(fetchUser.fulfilled, (state, {payload}) => {
            state.email = payload.email
            state.name = payload.name
            state.hasUser = true
        })
    }
})

export const {reducer} = userSlice
