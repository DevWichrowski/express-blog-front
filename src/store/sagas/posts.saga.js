import {all, put, takeLatest} from 'redux-saga/effects';
import {getPostsFailure, getPostsSuccess} from "../actions/posts.actions";

import {getAllPosts} from "../../core/api";

function* getPostsGen(action) {
    try {
        const payload = yield getAllPosts();

        console.log('DATA', payload.data);

        yield put(getPostsSuccess(payload.data));
    } catch (e) {
        console.log('error', e);
        yield put(getPostsFailure());
    }

}

export default function* postsSaga() {
    yield all([
        yield takeLatest('GET_POSTS_PENDING', getPostsGen)
    ]);
}