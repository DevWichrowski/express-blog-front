export const LOGIN_PENDING = "LOGIN_PENDING";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";


export const loginPending = payload => ({
    type: LOGIN_PENDING,
    payload,
});

export const loginSuccess = payload => ({
    type: LOGIN_SUCCESS,
    payload,
});

export const loginFailure = payload => ({
    type: LOGIN_FAILURE,
    payload
});


