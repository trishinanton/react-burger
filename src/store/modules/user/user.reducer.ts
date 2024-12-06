import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  getUser,
  postLogin,
  postLogout,
  postRegister,
  updateUser,
} from '../../../api'

interface IInitialState {
  email: string
  name: string
  password: string
  hasUser: boolean
}

const initialState: IInitialState = {
  email: '',
  name: '',
  password: '',
  hasUser: false,
}

export const fetchRegister = createAsyncThunk('user/fetchRegister', postRegister)

export const fetchLogin = createAsyncThunk('user/fetchLogin', postLogin)

export const fetchLogout = createAsyncThunk('user/fetchLogout', postLogout)

export const fetchUser = createAsyncThunk('user/fetchUser',getUser)

export const fetchUpdateUser = createAsyncThunk('user/fetchUpdateUser', updateUser)

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: ({ addCase }) => {
    addCase(fetchRegister.fulfilled, (state, { payload }) => {
      state.email = payload.email
      state.name = payload.name
      state.password = payload.password
      state.hasUser = true
    })
    addCase(fetchLogin.fulfilled, (state, { payload }) => {
      state.email = payload.email
      state.name = payload.name
      state.hasUser = true
    })
    addCase(fetchUser.fulfilled, (state, { payload }) => {
      state.email = payload.email
      state.name = payload.name
      state.hasUser = true
    })
    addCase(fetchUpdateUser.fulfilled, (state, { payload }) => {
      state.email = payload.email
      state.name = payload.name
      state.hasUser = true
    })
    addCase(fetchLogout.fulfilled, state => {
      state.email = ''
      state.name = ''
      state.password = ''
      state.hasUser = false
    })
  },
})

export const { reducer } = userSlice
