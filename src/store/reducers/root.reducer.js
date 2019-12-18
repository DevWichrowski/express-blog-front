import {combineReducers} from 'redux';
import {postsReducer} from "./posts.reducer";
import {authReducer} from "./auth.reducer";
import {usersReducer} from "./users.reducer";

export const rootReducer = combineReducers({
    posts: postsReducer,
    auth: authReducer,
    users: usersReducer,
});