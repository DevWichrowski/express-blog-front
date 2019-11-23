import produce from 'immer';
import * as PostsActions from "../actions/posts.actions";

const initialState = {
    posts: [],
    pending: false,
};

export const postsReducer = (state = initialState, action) =>
    produce(state, draft => {
        switch (action.type) {
            case PostsActions.GET_POSTS_PENDING: {
                draft.pending = true;
                break;
            }
            case PostsActions.GET_POSTS_SUCCESS:{
                draft.posts = action.payload;
                draft.pending = false;
                break;
            }
            case PostsActions.GET_POSTS_FAILURE:{
                draft.pending = false;
                break;
            }
            default:
                return state;
        }
    });