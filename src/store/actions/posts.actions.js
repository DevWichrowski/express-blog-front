export const GET_POSTS_PENDING = 'GET_POSTS_PENDING';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE';


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