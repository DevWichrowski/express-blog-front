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
            case PostsActions.GET_POSTS_SUCCESS: {
                draft.posts = action.payload;
                draft.pending = false;
                break;
            }
            case PostsActions.GET_POSTS_FAILURE: {
                draft.pending = false;
                break;
            }
            case PostsActions.ADD_POSTS_PENDING: {
                draft.pending = true;
                break;
            }
            case PostsActions.ADD_POSTS_SUCCESS: {
                draft.pending = false;
                draft.posts = [...state.posts, action.payload];
                break;
            }
            case PostsActions.ADD_POSTS_FAILURE: {
                draft.pending = false;
                break;
            }
            case PostsActions.DELETE_POST_PENDING: {
                draft.pending = true;
                break;
            }
            case PostsActions.DELETE_POST_SUCCESS: {
                draft.pending = false;
                draft.posts = draft.posts.filter(post => post.id !== action.payload)
                break;
            }
            case PostsActions.DELETE_POST_FAILURE: {
                draft.pending = false;
                break;
            }
            default:
                return state;
        }
    });