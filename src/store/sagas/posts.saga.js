import {all, put, takeLatest} from 'redux-saga/effects';
import {addPostFailure, addPostSuccess, getPostsFailure, getPostsSuccess} from "../actions/posts.actions";

import {addPostApi, getAllPosts} from "../../core/api";

function* getPostsGen(action) {
    try {
        const payload = yield getAllPosts();

        yield put(getPostsSuccess(payload.data));
    } catch (e) {
        console.log('error', e);
        yield put(getPostsFailure());
    }

}

function* addPostGen(action) {
    try {
        const response = yield addPostApi(action.payload);
        const data = yield response.data;

        console.log('response', response);
        console.log('data', data);

        yield put(addPostSuccess(action.payload))

    } catch (e) {
        console.log('error', e);
        addPostFailure(e)
    }
}


export default function* postsSaga() {
    yield all([
        yield takeLatest('GET_POSTS_PENDING', getPostsGen),
        yield takeLatest('ADD_POSTS_PENDING', addPostGen)
    ]);
}