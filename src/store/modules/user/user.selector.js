import { createSelector } from '@reduxjs/toolkit'

const selectUser = store => store.user

export const selectHasUser = createSelector(
  [selectUser],
  store => store.hasUser,
)

export const selectNameUser = createSelector([selectUser], store => store.name)

export const selectEmailUser = createSelector(
  [selectUser],
  store => store.email,
)

export const selectPasswordUser = createSelector(
  [selectUser],
  store => store.password,
)
