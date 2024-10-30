import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getIngredients } from '../../../api'

const initialState = {
  ingredients: [],
  isLoading: false,
  isError: false,
}

export const fetchIngredients = createAsyncThunk(
  'ingredients/fetchIngredients',
  () => getIngredients(),
)

const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState,
  reducers: {},
  extraReducers: ({ addCase }) => {
    addCase(fetchIngredients.pending, state => {
      state.isLoading = true
      state.isError = false
    })
    addCase(fetchIngredients.fulfilled, (state, { payload }) => {
      state.ingredients = payload
      state.isLoading = false
      state.isError = false
    })
    addCase(fetchIngredients.rejected, state => {
      state.isLoading = false
      state.isError = true
    })
  },
})

export const { reducer } = ingredientsSlice
