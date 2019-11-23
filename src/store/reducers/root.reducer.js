import {combineReducers} from 'redux';
import {dummyReducer} from "./dummy.reducer";
import {postsReducer} from "./posts.reducer";

export const rootReducer = combineReducers({
    dummy: dummyReducer,
    posts: postsReducer,
});