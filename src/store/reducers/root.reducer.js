import {combineReducers} from 'redux';
import {dummyReducer} from "./dummy.reducer";
import {postsReducer} from "./posts.reducer";
import {authReducer} from "./auth.reducer";

export const rootReducer = combineReducers({
    dummy: dummyReducer,
    posts: postsReducer,
    auth: authReducer,
});