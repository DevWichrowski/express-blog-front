import produce from 'immer';
import * as UsersActions from "../actions/users.actions";
import {GET_MY_PROFILE_PENDING} from "../actions/users.actions";
import {GET_MY_PROFILE_SUCCESS} from "../actions/users.actions";
import {GET_MY_PROFILE_FAILURE} from "../actions/users.actions";


const initialState = {
    pending: false,
    user: null,
};

export const usersReducer = (state = initialState, action) =>
    produce(state, draft => {
        switch (action.type) {
            case UsersActions.GET_MY_PROFILE_PENDING: {
                draft.pending = true;
                break;
            }
            case UsersActions.GET_MY_PROFILE_SUCCESS: {
                draft.pending = false;
                draft.user = action.payload;
                break;
            }
            case UsersActions.GET_MY_PROFILE_FAILURE: {
                draft.pending = false;
                break;
            }
            default:
                return state;
        }
    });