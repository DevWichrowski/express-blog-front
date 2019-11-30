import {combineReducers} from 'redux';
import {dummyReducer} from "./dummy.reducer";
import {postsReducer} from "./posts.reducer";
import {authReducer} from "./auth.reducer";
import {usersReducer} from "./users.reducer";

export const rootReducer = combineReducers({
    dummy: dummyReducer,
    posts: postsReducer,
    auth: authReducer,
    users: usersReducer,
});