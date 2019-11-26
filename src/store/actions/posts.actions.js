export const GET_POSTS_PENDING = 'GET_POSTS_PENDING';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE';

export const ADD_POSTS_PENDING = 'ADD_POSTS_PENDING';
export const ADD_POSTS_SUCCESS = 'ADD_POSTS_SUCCESS';
export const ADD_POSTS_FAILURE = 'ADD_POSTS_FAILURE';

export const DELETE_POST_PENDING = 'DELETE_POST_PENDING';
export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS';
export const DELETE_POST_FAILURE = 'DELETE_POST_FAILURE';

export const GET_SINGLE_POST_PENDING = 'GET_POSTS_PENDING';
export const GET_SINGLE_POST_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_SINGLE_POST_FAILURE = 'GET_POSTS_FAILURE';

export const getPostsPending = () => ({
    type: GET_POSTS_PENDING,
});

export const getPostsSuccess = payload => ({
    type: GET_POSTS_SUCCESS,
    payload
});

export const getPostsFailure = payload => ({
    type: GET_POSTS_FAILURE,
    payload
});

export const addPostPending = payload => ({
    type: ADD_POSTS_PENDING,
    payload
});

export const addPostSuccess = payload => ({
    type: ADD_POSTS_SUCCESS,
    payload
});

export const addPostFailure = payload => ({
    type: ADD_POSTS_FAILURE,
    payload
});

export const deletePostPending = payload => ({
    type: DELETE_POST_PENDING,
    payload
});

export const deletePostSuccess = payload => ({
    type: DELETE_POST_SUCCESS,
    payload
});

export const deletePostFailure = payload => ({
    type: DELETE_POST_FAILURE
});

export const getSinglePostPending = payload => ({
    type: GET_SINGLE_POST_PENDING,
});

export const getSinglePostSuccess = payload => ({
    type: GET_SINGLE_POST_SUCCESS,
    payload
});

export const getSinglePostFailure = payload => ({
    type: GET_SINGLE_POST_FAILURE,
});