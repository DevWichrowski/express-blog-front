import {createSelector} from 'reselect';

export const selectUsers = state => state.dummy;

export const getUserSelector = createSelector(
    selectUsers,
    state => state.user
);