export const GET_MY_PROFILE_PENDING = 'GET_MY_PROFILE_PENDING';
export const GET_MY_PROFILE_SUCCESS = 'GET_MY_PROFILE_SUCCESS';
export const GET_MY_PROFILE_FAILURE = 'GET_MY_PROFILE_FAILURE';

export const getMyProfilePending = payload => ({
    type: GET_MY_PROFILE_PENDING,
    payload
});

export const getMyProfileSuccess = payload => ({
    type: GET_MY_PROFILE_SUCCESS,
    payload
});

export const getMyProfileFailure = payload => ({
    type: GET_MY_PROFILE_FAILURE,
    payload
});

 
