import produce from 'immer';
import * as UsersActions from "../actions/auth.actions";


const initialState = {
    pending: false,
    user: null,
};

export const usersReducer = (state = initialState, action) =>
    produce(state, draft => {
        switch (action.type) {
            case UsersActions.LOGIN_PENDING: {
                draft.pending = true;
                break;
            }
            case UsersActions.LOGIN_SUCCESS: {
                draft.pending = false;
                draft.user = action.payload;
                break;
            }
            case UsersActions.LOGIN_FAILURE: {
                draft.pending = false;
                break;
            }
            default:
                return state;
        }
    });