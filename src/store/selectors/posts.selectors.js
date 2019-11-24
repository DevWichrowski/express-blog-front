import {createSelector} from 'reselect';

export const selectPosts = state => state.posts;

export const getAllPosts = createSelector(
    selectPosts,
    state => state.posts
);