import {createSelector} from "@reduxjs/toolkit";

const selectUser = store => store.user

export const selectHasUser = createSelector(
    [selectUser],
    store => store.hasUser
)
